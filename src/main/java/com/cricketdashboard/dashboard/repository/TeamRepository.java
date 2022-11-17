package com.cricketdashboard.dashboard.repository;

import org.springframework.data.repository.CrudRepository;

import com.cricketdashboard.dashboard.model.Team;

public interface TeamRepository extends CrudRepository<Team, Long> {
  
    Team findByTeamName(String teamName);

    // Team[] findAllTeam();

    
}
