package com.cricketdashboard.dashboard.controller;


import java.time.LocalDate;
import java.util.ArrayList;

import java.util.List;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

import org.springframework.web.bind.annotation.RestController;

import com.cricketdashboard.dashboard.model.Match;
import com.cricketdashboard.dashboard.model.Team;
import com.cricketdashboard.dashboard.repository.MatchRepository;
import com.cricketdashboard.dashboard.repository.TeamRepository;

@RestController
@CrossOrigin
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
        ArrayList<String> r = new ArrayList<>();
        for( Team element : t ){
            r.add(element.getTeamName());
            System.out.println( element.getTeamName() );
        }
        return r;
        
    }


    

    @GetMapping("/home/matches")
    public ArrayList<ArrayList<String>> getallMatches(){
       
       ArrayList<Match> x = (ArrayList<Match>) this.matchRepository.findAll();
       ArrayList<ArrayList<String>> y = new ArrayList<>();

      
       int i=0;
       for(Match element : x){
        if(i>4){break;}
        ArrayList<String> p = new ArrayList<>();
        p.add(element.getTeam1());
        p.add(element.getTeam2());
        p.add(element.getWinningTeam());
        p.add(element.getWonBy());
        p.add(element.getMargin());
        y.add(p);
        
        ++i;
       }
        return y;
    }
 
  
    @GetMapping("/home/{TeamName}")
    public Team getTeam(@PathVariable String TeamName){

       Team team =  this.teamRepository.findByTeamName(TeamName);
      Pageable pageable = PageRequest.of(0, 4);
       team.setMatches(matchRepository.getByTeam1OrTeam2OrderByDateDesc(TeamName, TeamName, pageable)); 
       return team;
    }
//for total wins , total matches each season
   @GetMapping("/team/{teamName}/matches")
   public List<Team> getMatchesForTeam(@PathVariable String teamName){
    // int year;
    ArrayList<Team> teamAllSeason = new ArrayList<>();
    for (int year=2007; year<=2022; year++) {
    LocalDate startDate = LocalDate.of(year, 1, 1);
    LocalDate endDate = LocalDate.of(year + 1, 1, 1 );
    Team team = new Team();
    team.setMatches(matchRepository.getMatchesByTeamBetweenDates(
        teamName, startDate,endDate
    ));
    System.out.println("total matches print" + matchRepository.getTotalMatchesOfSeason(teamName, startDate, endDate));
    System.out.println("total wins " + matchRepository.getTotalWinsOfSeason(teamName, startDate, endDate));
    team.setTeamName(teamName);
    team.setTotalMatches(matchRepository.getTotalMatchesOfSeason(teamName, startDate, endDate));
    team.setTotalWins(matchRepository.getTotalWinsOfSeason(teamName, startDate, endDate));
    team.setSeason(year);
    teamAllSeason.add(team);
    }
    
    return teamAllSeason;
    // return this.matchRepository.getMatchesByTeamBetweenDates(
    //     teamName, startDate,endDate
    // );

   }

 }




    
    //arrays of season[object for totalWins, total Matches]
    

  

