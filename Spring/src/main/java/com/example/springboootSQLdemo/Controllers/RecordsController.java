package com.example.springboootSQLdemo.Controllers;

import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.springboootSQLdemo.entities.Record;
import com.example.springboootSQLdemo.services.RecordsService;




@RestController
public class RecordsController {

	@Autowired
	private RecordsService service;
	
	//This controller right now is using functional programming to call
	//Methods from service based on which URL is input.
	//Controller directs input to respective functions
	@GetMapping("/records")
	@CrossOrigin(origins = "http://localhost:3000")
	public List<Record> getStudents(){
		List<Record> x = service.findAll();
		Collections.sort(x,new SortByScore());
		return x;
	}	
	
	@PostMapping("/records")
	@CrossOrigin(origins = "http://localhost:3000")
	//Removed @RequestBody. Now postman can post data...
	public Record saveStudent(@RequestBody Record record){
		System.out.println(record);
		return service.addRecord(record);
	}	
	
	
	@PostMapping("/test")
	@CrossOrigin(origins = "http://localhost:3000")
	//Removed @RequestBody. Now postman can post data...
	public void saveId(String record ){
		System.out.println(record);
		
	}	
}
