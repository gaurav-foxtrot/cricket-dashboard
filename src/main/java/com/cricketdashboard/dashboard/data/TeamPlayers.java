package com.cricketdashboard.dashboard.data;

public class TeamPlayers {

    private int id;
    private String[] team1Players;
    private String[] team2Players;
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String[] getTeam1Players() {
        return team1Players;
    }
    public void setTeam1Players(String[] team1Players) {
        this.team1Players = team1Players;
    }
    public String[] getTeam2Players() {
        return team2Players;
    }
    public void setTeam2Players(String[] team2Players) {
        this.team2Players = team2Players;
    }
    
}
