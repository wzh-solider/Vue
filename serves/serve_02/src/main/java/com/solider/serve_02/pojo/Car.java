package com.solider.serve_02.pojo;

import lombok.Data;

/**
 * @author Solider
 * @version 1.0
 * @Date 2024/1/28 16:53
 * @since 1.0
 */
@Data
public class Car {
    private String id;
    private String name;
    private Integer price;

    public Car(String id, String name, Integer price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
