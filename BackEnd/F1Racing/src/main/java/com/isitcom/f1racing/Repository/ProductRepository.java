package com.isitcom.f1racing.Repository;

import com.isitcom.f1racing.Entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByType(Product.ProductType type);
}
