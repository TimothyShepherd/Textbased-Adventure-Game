package com.example.springboootSQLdemo.Controllers;

import java.util.Comparator;

import com.example.springboootSQLdemo.entities.Record;

public class SortByScore implements Comparator<Record>
	{


		public int compare(Record o1, Record o2) {
			//Larger first
			return Integer.parseInt(o2.getScore())-Integer.parseInt(o1.getScore());
		}
	
}
