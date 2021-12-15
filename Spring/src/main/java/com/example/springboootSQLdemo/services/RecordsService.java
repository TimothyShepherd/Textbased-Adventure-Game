package com.example.springboootSQLdemo.services;

import java.util.List;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import com.example.springboootSQLdemo.entities.Record;
import com.example.springboootSQLdemo.repositories.RecordsRepository;

public interface RecordsService{
    List<Record> findByFirstName(String firstName);
    List<Record> findFirstNameContaining(String firstName);
    List<Record> findByLastNameNotNull();
    List<Record> findByGuardianName(String guradianName);
    Record findByFirstNameAndLastName(String firstName, String lastName);
	List<Record> findAll();
	Record addRecord(Record student);

}
