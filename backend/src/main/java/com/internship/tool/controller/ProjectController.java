package com.internship.tool.controller;

import com.internship.tool.model.Project;
import com.internship.tool.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/projects")
@CrossOrigin("*")
public class ProjectController {

    @Autowired
    private ProjectRepository repository;

    @GetMapping
    public List<Project> getAllProjects() {
        return repository.findAll();
    }

    @PostMapping
    public Project createProject(@RequestBody Project project) {
        return repository.save(project);
    }
}