package com.cricketdashboard.dashboard.controller;


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

    // @GetMapping("/home/teams")
    // public Team[] getallTeams(){
    //     Team[] teamname = this.teamRepository.findAllTeam();
    //     return teamname;
        
    // }
 

    @GetMapping("/home/{TeamName}")
    public Team getTeam(@PathVariable String TeamName){

       Team team =  this.teamRepository.findByTeamName(TeamName);
       team.setMatches(matchRepository.getByTeam1OrTeam2OrderByDateDesc(TeamName, TeamName)); 
       return team;
    }
  

  
}
