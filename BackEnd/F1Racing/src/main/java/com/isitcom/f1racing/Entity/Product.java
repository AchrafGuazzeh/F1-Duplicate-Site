package com.isitcom.f1racing.Entity;


import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "products")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nom;

    @Column(nullable = false)
    private Double prix;

    @Column(nullable = false)
    private Integer quantite;

    @Column(nullable = false)
    private String imageUrl;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private ProductType type;

    public enum ProductType {
        @JsonProperty("team-merchandise")
        TEAM_MERCHANDISE,

        @JsonProperty("driver-gear")
        DRIVER_GEAR,

        @JsonProperty("collectibles")
        COLLECTIBLES
    }
}
