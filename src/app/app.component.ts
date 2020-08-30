import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/**
 * Download the Angular Augury browser extension and view it in "Developer Tools" to view your Angular app in detail as
 * it is running in the browser.
 */

export class AppComponent {
  /**
   * "Cannot read property 'push' of undefined":
   * Needed to initialize servers
   */
  servers = [];

  onAddServer() {
    this.servers.push('Another Server');
  }

  /**
   * Chrome allows us to view the main.bundle.js in "Soruces".
   * 
   * You can place a breakpoint on a line in the javascript file.
   * 
   * A typescript file will open and show the breakpoint.
   * 
   * You may click on an element that results in a function call. Clicking on an <li> element will call onRemoteServer().
   * If you have the breakpoint set here, execution will pause.
   * 
   * Adding 1 to the id causes a logical error. You may use the breakpoint in developer tools to find logical errors by
   * looking at the values of your variables as you step over to continue execution.
   * 
   * Since you have to dig through the javascript to find the correct spot for the breakpoint, this can be tedious.
   * 
   * You can find your typescript files in Sources under:
   *  webpack:// -> . -> src -> app
   */
  onRemoveServer(id: number) {
    const position = id + 1;
    this.servers.splice(position, 1);
  }
}
