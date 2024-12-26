import { Component } from '@angular/core';
import { OrderService } from '../services/order.service';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent {
    constructor(private orderService: OrderService) {}

    onSubmit(form: any): void {
        const order = form.value;
        this.orderService.saveOrder(order).subscribe(
            response => {
                console.log('Order submitted successfully', response);
            },
            error => {
                console.error('Error submitting order', error);
            }
        );
    }
}


