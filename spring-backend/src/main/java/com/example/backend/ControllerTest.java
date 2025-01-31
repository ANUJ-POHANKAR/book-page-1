package com.example.backend;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

@WebMvcTest(Controller.class)
public class ControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;  // Used to convert Java objects to JSON

    @Test
    public void testGetOrdersInitiallyEmpty() throws Exception {
        mockMvc.perform(get("/api/v1/orders"))
               .andExpect(status().isOk())
               .andExpect(jsonPath("$.length()").value(0)); // Initially empty list
    }

    @Test
    public void testSaveOrder() throws Exception {
        Order order = new Order();
        order.setName("John Doe");
        order.setEmail("john@example.com");
        order.setBook("Spring Boot");
        order.setQuantity(2);

        mockMvc.perform(post("/api/v1/orders")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(order)))
               .andExpect(status().isOk())
               .andExpect(jsonPath("$.name").value("John Doe"))
               .andExpect(jsonPath("$.email").value("john@example.com"))
               .andExpect(jsonPath("$.book").value("Spring Boot"))
               .andExpect(jsonPath("$.quantity").value(2));
    }
}
