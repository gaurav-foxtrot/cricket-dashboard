package com.cricketdashboard.dashboard.controller;


import java.util.ArrayList;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cricketdashboard.dashboard.model.Team;
import com.cricketdashboard.dashboard.repository.MatchRepository;
import com.cricketdashboard.dashboard.repository.TeamRepository;

@RestController
public class TeamController {
    

    private TeamRepository teamRepository;
    private MatchRepository matchRepository;

    public TeamController(TeamRepository teamRepository, MatchRepository matchRepository ) {
        this.teamRepository = teamRepository;
        this.matchRepository = matchRepository;
      
    }

    @GetMapping("/home/teams")
    public ArrayList<String> getallTeams(){
        ArrayList<Team> t = (ArrayList<Team>) this.teamRepository.findAll();
        System.out.println("------------------------------------------------------------------------------");
        ArrayList<String> r = new ArrayList<>();
        for( Team element : t ){
            r.add(element.getTeamName());
            System.out.println( element.getTeamName() );
        }
        return r;
        
    }
 

    @GetMapping("/home/{TeamName}")
    public Team getTeam(@PathVariable String TeamName){

       Team team =  this.teamRepository.findByTeamName(TeamName);
      Pageable pageable = PageRequest.of(0, 4);
       team.setMatches(matchRepository.getByTeam1OrTeam2OrderByDateDesc(TeamName, TeamName, pageable)); 
       return team;
    }
  

  
}
