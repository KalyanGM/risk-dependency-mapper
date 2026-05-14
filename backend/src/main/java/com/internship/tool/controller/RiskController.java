package com.example.risk;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/risks")
@CrossOrigin("*")
public class RiskController {

    private List<Map<String, Object>> risks = new ArrayList<>();

    @GetMapping
    public List<Map<String, Object>> getAll() {
        return risks;
    }

    @PostMapping
    public Map<String, Object> add(@RequestBody Map<String, Object> risk) {
        risk.put("id", risks.size() + 1);
        risks.add(risk);
        return risk;
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable int id) {
        risks.removeIf(r -> ((Integer) r.get("id")) == id);
    }
}