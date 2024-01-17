package com.solider.serve_01.listener;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.availability.AvailabilityChangeEvent;
import org.springframework.boot.availability.ReadinessState;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;

/**
 * @author Solider
 * @version 1.0
 * @Date 2024/1/28 17:07
 * @since 1.0
 */
@Component
@Slf4j
public class ServiceRunSuccessListener implements ApplicationListener<AvailabilityChangeEvent> {
    @Override
    public void onApplicationEvent(AvailabilityChangeEvent event) {
        if (ReadinessState.ACCEPTING_TRAFFIC == event.getState()){
            log.info("===> 服务器1启动成功了,请求学生信息地址为：http://localhost:5000/students");
        }
    }
}
