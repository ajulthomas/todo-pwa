import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor() {}

  generateUniqueId(): string {
    const timestamp = Date.now().toString(); // Get current timestamp as string
    const random = Math.random().toString(36).substring(2, 10); // Generate random alphanumeric string
    const uniqueId = `${timestamp}_${random}`; // Combine timestamp and random string
    return uniqueId;
  }
}
