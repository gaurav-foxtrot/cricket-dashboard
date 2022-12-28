package com.cricketdashboard.dashboard.data;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.batch.core.BatchStatus;
import org.springframework.batch.core.JobExecution;
import org.springframework.batch.core.listener.JobExecutionListenerSupport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import com.cricketdashboard.dashboard.model.Team;

@Component
public class JobCompletionNotificationListener extends JobExecutionListenerSupport {

  private static final Logger log = LoggerFactory.getLogger(JobCompletionNotificationListener.class);

  private final EntityManager em;

  @Autowired
  public JobCompletionNotificationListener(EntityManager em) {
    this.em = em;
  }

  @Override
  @Transactional
  public void afterJob(JobExecution jobExecution) {
    if(jobExecution.getStatus() == BatchStatus.COMPLETED) {
      log.info("!!! JOB FINISHED! Time to verify the results");
      
      Map<String, Team> teamData = new HashMap<>();

      // em.createQuery("select m.playerOfMatch from Match m ", Object[].class)
      // .getResultList()
      // .stream()
      // .forEach(match -> m = );
      
        // em.createQuery("select m.team1 where season=2022, count(*) from Match m",
        // .getResultList()
        // .stream()
        // .map(e -> new Team(String))
      
      
      em.createQuery("select m.team1, count(*) from Match m  group by m.team1 ", Object[].class)
      	.getResultList()
      	.stream()
      	.map(e -> new Team((String) e[0], (Long) e[1]))
      	.forEach(team -> teamData.put(team.getTeamName(), team));
     //   System.out.println("1" + teamData );


      em.createQuery("select m.team2, count(*) from Match m  group by m.team2 ", Object[].class)
      	.getResultList()
      	.stream()
      	.forEach(e -> {
      		Team team = teamData.get((String) e[0]);
      		team.setTotalMatches(team.getTotalMatches() + (Long) e[1]);
          
        });
      
      em.createQuery("select m.winningTeam, count(*) from Match m group by m.winningTeam ", Object[].class)
      	.getResultList()
    	.stream()
    	.forEach(e -> {
    		Team team = teamData.get((String) e[0]);
    		if(team != null) team.setTotalWins((Long) e[1]);
           // System.out.println("1" + teamData);
    	});
       teamData.values().forEach(team -> em.persist(team));
       teamData.values().forEach(team -> System.out.println(team));

   
    }
  }
}


// private long id;
// private String city;
// private LocalDate date;
// private String season;
// private String matchNumber;
// private String team1;
// private String team2;
// private String venue;
// private String tossWinner;
// private String tossDecision;
// private String superOver;
// private String winningTeam;
// private String wonBy;
// private String margin;
// private String method;
// private String playerOfMatch;
// private String umpire1;
// private String umpire2;