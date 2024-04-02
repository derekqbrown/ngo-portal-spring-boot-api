package com.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication//(exclude = {DataSourceAutoConfiguration.class })
@EnableDiscoveryClient
public class MicroserviceUserMain {

	public static void main(String[] args) {
		SpringApplication.run(MicroserviceUserMain.class, args);
	}

}
