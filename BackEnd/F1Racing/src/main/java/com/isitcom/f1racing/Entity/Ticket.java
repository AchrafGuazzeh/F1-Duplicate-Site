package com.isitcom.f1racing.Entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "tickets")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Ticket {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private Integer quantity;

    @Column(nullable = false)
    private String race;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private TicketType type;

    public enum TicketType {
        @JsonProperty("weekend-pass")
        WEEKEND_PASS,

        @JsonProperty("grandstand")
        GRANDSTAND
    }
}
