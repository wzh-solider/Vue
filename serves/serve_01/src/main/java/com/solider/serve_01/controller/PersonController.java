package com.solider.serve_01.controller;

import com.alibaba.fastjson2.JSON;
import com.solider.serve_01.pojo.Person;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

/**
 * @author Solider
 * @version 1.0
 * @Date 2024/2/16 15:59
 * @since 1.0
 */
@RestController
public class PersonController {
    @GetMapping("/person")
    public String getPerson() {
        Person person = new Person(UUID.randomUUID().toString(), "Solider");
        return JSON.toJSONString(person);
    }
}
