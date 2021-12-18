package com.example.springboootSQLdemo.repositories;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.springboootSQLdemo.entities.Record;

import java.util.List;

@Repository
public interface RecordsRepository extends JpaRepository<Record, Long> {

//    // JPQL
//    @Query("select s from Student s where s.emailId = ?1")
//    Student getStudentByEmailAddress(String emailId);
//
//    // JPQL
//    @Query("select s.firstName from Student s where s.emailId = ?1")
//    String getStudentFirstNameByEmailAddress(String emailId);

    // native
//    @Query(
//            value = "select * from tbl_student s where s.email_address  = ?1",
//            nativeQuery = true
//    )
//    Student getStudentByEmailNative(String firstName);
//
//    //native names params
//    @Query(
//            value = "select * from tbl_student s where s.email_address  = :emailId",
//            nativeQuery = true
//    )
//    Student getStudentByEmailNativeParam(
//            @Param("emailId") String emailId);
}
