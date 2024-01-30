package com.solider.serve_01.pojo;

import lombok.Data;

/**
 * @author Solider
 * @version 1.0
 * @Date 2024/2/16 15:58
 * @since 1.0
 */
@Data
public class Person {
    private String id;
    private String name;
    public Person(String id, String name) {
        this.id = id;
        this.name = name;
    }
}
