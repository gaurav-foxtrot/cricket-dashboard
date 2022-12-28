package com.cricketdashboard.dashboard.repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import javax.print.DocFlavor.STRING;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.cricketdashboard.dashboard.model.Match;

public interface MatchRepository extends CrudRepository <Match, Long>{

    List<Match> getByTeam1OrTeam2OrderByDateDesc(String teamName, String teamName2, Pageable pageable );

   @Query("select m from Match m where (m.team1 = :teamName or m.team2 = :teamName) and m.date between :dateStart and :dateEnd order by date desc")
   List<Match> getMatchesByTeamBetweenDates(@Param("teamName") String teamName, @Param("dateStart") LocalDate dateStart, @Param("dateEnd") LocalDate dateEnd);

   @Query("select count(*) from Match m where (m.team1 = :teamName or m.team2 = :teamName) and m.date between :dateStart and :dateEnd")
   int getTotalMatchesOfSeason(@Param("teamName") String teamName, @Param("dateStart") LocalDate dateStart, @Param("dateEnd") LocalDate dateEnd);

   @Query("select count(*) from Match m where (m.winningTeam = :teamName) and m.date between :dateStart and :dateEnd")
   int getTotalWinsOfSeason(@Param("teamName") String teamName, @Param("dateStart") LocalDate dateStart, @Param("dateEnd") LocalDate dateEnd);
    
}
