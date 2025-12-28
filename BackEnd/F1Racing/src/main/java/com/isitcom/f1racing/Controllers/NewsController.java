package com.isitcom.f1racing.Controllers;


import com.isitcom.f1racing.Entity.News;
import com.isitcom.f1racing.Repository.NewsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/news")
public class NewsController {

    @Autowired
    private NewsRepository newsRepository;

    @GetMapping
    public ResponseEntity<List<News>> getAllNews() {
        List<News> news = newsRepository.findAll();
        return ResponseEntity.ok(news);
    }

    @GetMapping("/{id}")
    public ResponseEntity<News> getNewsById(@PathVariable Long id) {
        return newsRepository.findById(id)
                .map(news -> ResponseEntity.ok(news))
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<News> createNews(@RequestBody News news) {
        news.setId(null);
        News savedNews = newsRepository.save(news);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedNews);
    }

    @PutMapping("/{id}")
    public ResponseEntity<News> updateNews(@PathVariable Long id, @RequestBody News newsDetails) {
        Optional<News> newsOptional = newsRepository.findById(id);

        if (newsOptional.isPresent()) {
            News news = newsOptional.get();
            news.setTitle(newsDetails.getTitle());
            news.setDescription(newsDetails.getDescription());
            news.setDate(newsDetails.getDate());

            News updatedNews = newsRepository.save(news);
            return ResponseEntity.ok(updatedNews);
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteNews(@PathVariable Long id) {
        if (newsRepository.existsById(id)) {
            newsRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}
