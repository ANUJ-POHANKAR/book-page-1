import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Order {
    cusname: string;
    telephone: string;
    mail: string;
    book: string;
    quantity: number;
}

@Injectable({
    providedIn: 'root',
})
export class OrderService {
    private apiUrl = 'http://localhost:8080/api/v1/orders';

    constructor(private http: HttpClient) {}

    // Fetch all orders
    getOrders(): Observable<Order[]> {
        return this.http.get<Order[]>(this.apiUrl);
    }

    // Save a new order
    saveOrder(order: Order): Observable<Order> {
        return this.http.post<Order>(this.apiUrl, order);
    }
}

