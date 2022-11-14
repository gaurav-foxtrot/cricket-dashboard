package com.cricketdashboard.dashboard.data;

import org.springframework.batch.core.configuration.annotation.EnableBatchProcessing;
import org.springframework.batch.core.configuration.annotation.JobBuilderFactory;
import org.springframework.batch.core.configuration.annotation.StepBuilderFactory;
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
  return new JdbcBatchItemWriterBuilder<Person>()
    .itemSqlParameterSourceProvider(new BeanPropertyItemSqlParameterSourceProvider<>())
    .sql("INSERT INTO people (first_name, last_name) VALUES (:firstName, :lastName)")
    .dataSource(dataSource)
    .build();
}


}
