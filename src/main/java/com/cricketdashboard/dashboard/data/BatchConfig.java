package com.cricketdashboard.dashboard.data;

import javax.sql.DataSource;

import org.springframework.batch.core.configuration.annotation.EnableBatchProcessing;
import org.springframework.batch.core.configuration.annotation.JobBuilderFactory;
import org.springframework.batch.core.configuration.annotation.StepBuilderFactory;
import org.springframework.batch.item.database.BeanPropertyItemSqlParameterSourceProvider;
import org.springframework.batch.item.database.JdbcBatchItemWriter;
import org.springframework.batch.item.database.builder.JdbcBatchItemWriterBuilder;
import org.springframework.batch.item.file.FlatFileItemReader;
import org.springframework.batch.item.file.builder.FlatFileItemReaderBuilder;
import org.springframework.batch.item.file.mapping.BeanWrapperFieldSetMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;

import com.cricketdashboard.dashboard.model.Match;

@Configuration
@EnableBatchProcessing
public class BatchConfig {

    private final String FIELD_NAMES[] = new String[]{
        "id", "city", "date", "season", "match_number", "team1", "team2", "venue", "tosswinner", "tossdecision", "superover", "winningteam", "wonby", "margin", "method", "playerofmatch", "umpire1", "umpire2"
    };

  @Autowired
  public JobBuilderFactory jobBuilderFactory;

  @Autowired
  public StepBuilderFactory stepBuilderFactory;

  @Bean
public FlatFileItemReader<MatchInput> reader() {
  return new FlatFileItemReaderBuilder<MatchInput>()
    .name("MatchItemReader")
    .resource(new ClassPathResource("match-data.csv"))
    .delimited()
    .names(FIELD_NAMES)
    .fieldSetMapper(new BeanWrapperFieldSetMapper<MatchInput>() {{
      setTargetType(MatchInput.class);
    }})
    .build();
}

@Bean
public MatchDataProcessor processor() {
  return new MatchDataProcessor();
}

@Bean
public JdbcBatchItemWriter<Match> writer(DataSource dataSource) {
  return new JdbcBatchItemWriterBuilder<Match>()
    .itemSqlParameterSourceProvider(new BeanPropertyItemSqlParameterSourceProvider<>())
    .sql("INSERT INTO match (id, city, date, season, match_number, team1, team2, venue, toss_winner, toss_decision, super_over, winning_team, won_by, margin, method, player_of_match, umpire1, umpire2 ) "
    + " VALUES (:id, :city, :date, :season, :matchNumber, :team1, :team2, :venue, :tossWinner, :tossDecision, :superOver, :winningTeam, :wonBy, :margin, :method, playerOfMatch, :umpire1, :umpire2)")
.dataSource(dataSource).build();
}


}


// id,city,date,Season,matchNumber,team1,team2,venue,tossWinner,tossDecision,SuperOver,winningTeam,wonBy,margin,method,playerOfMatch,umpire1,umpire2,
    