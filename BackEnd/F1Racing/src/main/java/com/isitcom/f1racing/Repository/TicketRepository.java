package com.isitcom.f1racing.Repository;

import com.isitcom.f1racing.Entity.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TicketRepository extends JpaRepository<Ticket, Long> {
    List<Ticket> findByType(Ticket.TicketType type);
}
