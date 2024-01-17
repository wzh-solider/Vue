package com.solider.serve_02.controller;

import com.alibaba.fastjson2.JSON;
import com.solider.serve_02.pojo.Car;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

/**
 * @author Solider
 * @version 1.0
 * @Date 2024/1/28 16:54
 * @since 1.0
 */
@RestController
@Slf4j
public class CarController {

    @GetMapping("/cars")
    public String cars() {
        log.info("有人请求服务器2了");
        List<Car> cars = new ArrayList<>();
        cars.add(new Car("001", "奔驰", 199));
        cars.add(new Car("002", "马自达", 109));
        cars.add(new Car("003", "捷达", 120));
        return JSON.toJSONString(cars);
    }
}
