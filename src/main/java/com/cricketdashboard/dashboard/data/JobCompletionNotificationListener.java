package com.cricketdashboard.dashboard.data;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.batch.core.BatchStatus;
import org.springframework.batch.core.JobExecution;
import org.springframework.batch.core.listener.JobExecutionListenerSupport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

@Component
public class JobCompletionNotificationListener extends JobExecutionListenerSupport {

  private static final Logger log = LoggerFactory.getLogger(JobCompletionNotificationListener.class);

  private final JdbcTemplate jdbcTemplate;

  @Autowired
  public JobCompletionNotificationListener(JdbcTemplate jdbcTemplate) {
    this.jdbcTemplate = jdbcTemplate;
  }

  @Override
  public void afterJob(JobExecution jobExecution) {
    if(jobExecution.getStatus() == BatchStatus.COMPLETED) {
      log.info("!!! JOB FINISHED! Time to verify the results");

      jdbcTemplate.query("SELECT id,city,date FROM match",
        (rs, row) -> "id : " + rs.getString(1) + " city : " + rs.getString(2) + " date : " + rs.getString(3)
      ).forEach(str -> System.out.println(str));
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
// private String team1Players;
// private String team2Players;
// private String umpire1;
// private String umpire2;