package com.example.springboootSQLdemo.services;

import java.util.List;
import java.util.Optional;
import java.util.function.Function;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.query.FluentQuery.FetchableFluentQuery;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.springboootSQLdemo.entities.Record;
import com.example.springboootSQLdemo.repositories.RecordsRepository;

@Service
@Primary
public class RecordsServiceImpl implements RecordsService{

	@Autowired
	private RecordsRepository repository;
	
	public List<Record> findByFirstName(String firstName) {
		// TODO Auto-generated method stub
		return null;
	}

	
	public List<Record> findFirstNameContaining(String firstName) {
		// TODO Auto-generated method stub
		return null;
	}

	
	public List<Record> findByLastNameNotNull() {
		// TODO Auto-generated method stub
		return null;
	}

	
	public List<Record> findByGuardianName(String guradianName) {
		// TODO Auto-generated method stub
		return null;
	}

	
	public Record findByFirstNameAndLastName(String firstName, String lastName) {
		// TODO Auto-generated method stub
		return null;
	}

	
	public List<Record> findAll() {
		List<Record> x = repository.findAll();
		
		return x;
	}

	
	@Transactional
	public Record addRecord(Record student) {
		
		return repository.save(student);
	}

}
