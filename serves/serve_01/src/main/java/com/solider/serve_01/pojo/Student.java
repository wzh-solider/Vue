package com.solider.serve_01.pojo;

import lombok.Data;

/**
 * @author Solider
 * @version 1.0
 * @Date 2024/1/28 16:33
 * @since 1.0
 */
@Data
public class Student {
    private String id;
    private String name;
    private Integer age;

    public Student(String id, String name, Integer age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
}
