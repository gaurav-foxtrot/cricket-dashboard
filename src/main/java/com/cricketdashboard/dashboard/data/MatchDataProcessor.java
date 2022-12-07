package com.cricketdashboard.dashboard.data;

import java.time.LocalDate;
import java.time.LocalDateTime;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.batch.item.ItemProcessor;

import com.cricketdashboard.dashboard.model.Match;

public class MatchDataProcessor implements ItemProcessor<MatchInput, Match> {
  private static final Logger log = LoggerFactory.getLogger(MatchDataProcessor.class);

  @Override
  public Match process(final MatchInput matchInput) throws Exception {
   Match match = new Match();
    match.setId(Long.parseLong(matchInput.getId()));
    match.setCity(matchInput.getCity());
    match.setDate(LocalDate.parse(matchInput.getDate()));
    match.setSeason(matchInput.getSeason());
    match.setMatchNumber(matchInput.getMatchNumber());
    

    //to set first inning team and second inning team
    String firstInningsTeam; 
    String secondInningsTeam;

    if("bat".equals(matchInput.getTossDecision())){

      firstInningsTeam = matchInput.getTossWinner();
      secondInningsTeam = matchInput.getTossWinner().equals(matchInput.getTeam1()) 
      ? matchInput.getTeam2() : matchInput.getTeam1();
      
    }else{
      
      secondInningsTeam = matchInput.getTossWinner();
      firstInningsTeam = matchInput.getTossWinner().equals(matchInput.getTeam1()) 
      ? matchInput.getTeam2() : matchInput.getTeam1();
     
    }

    match.setTeam1(firstInningsTeam);
    match.setTeam2(secondInningsTeam);

    match.setVenue(matchInput.getVenue());
    match.setTossWinner(matchInput.getTossWinner());
    match.setTossDecision(matchInput.getTossDecision());
    match.setTeam1Players(matchInput.getTeam1Players());
    match.setTeam2Players(match.getTeam2Players());
    match.setSuperOver(matchInput.getSuperOver());
    match.setPlayerOfMatch(matchInput.getPlayerOfMatch());
    match.setWinningTeam(matchInput.getWinningTeam());
    match.setWonBy(matchInput.getWonBy());
    match.setMargin(matchInput.getMargin());
    match.setMethod(matchInput.getMethod());
    match.setUmpire1(matchInput.getUmpire1());
    match.setUmpire2(matchInput.getUmpire2());

    return match;
  }

}
    
