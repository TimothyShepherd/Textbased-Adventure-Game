package com.example.springboootSQLdemo.entities;

import lombok.*;

import java.util.Comparator;

import javax.persistence.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
@Table(
        name = "Records")
public class Record implements Comparator<Record>{
    @Id
    @SequenceGenerator(
            name = "records_sequence",
            sequenceName = "records_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "records_sequence"
    )
    private Long recordId;
    private String firstName;
    private String score;
//    @Embedded
//    private Guardian guardian;
    
    public Long getRecordId(){
    	return this.recordId;
    }
    public void setRecordId(Long recordId){
    	this.recordId = recordId;
    }
    
    public String getFirstName(){
    	return firstName;
    }
    public void setFirstName(String firstName){
    	this.firstName = firstName;
    }
    public String getScore(){
    	return this.score;
    }
    public void setScore(String score){
    	this.score= score;
    }
    
    public String toString(){
		return "recordId: "+recordId+"\tfirstName: "+firstName+"\tscore: "+score;
    }
	public int compare(Record o1, Record o2) {
		
		return Integer.parseInt(o1.getScore())-Integer.parseInt(o2.getScore());
	}
    

}
