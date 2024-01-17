package com.solider.serve_01.controller;


import com.alibaba.fastjson2.JSON;
import com.solider.serve_01.pojo.Student;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
/**
 * @author Solider
 * @version 1.0
 * @Date 2024/1/28 16:34
 * @since 1.0
 */
@RestController
@Slf4j
public class StudentController {
    private static Integer count = 0;

    @GetMapping("/students")
    public String students() {
        log.info("有人请求服务器1了" + (++count));
        List<Student> students = new ArrayList<>();
        students.add(new Student("001", "Tom", 18));
        students.add(new Student("002", "Jerry", 19));
        students.add(new Student("003", "tony", 120));
        return JSON.toJSONString(students);
    }
}
