import { Component, OnInit, ɵConsole } from "@angular/core";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  public weatherSearchForm: FormGroup;
  public weatherData: any = {};

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit() {
    this.weatherSearchForm = this.formBuilder.group({
      location: new FormControl("")
    });
  }

  sendToAPI(formValues) {
    // this.getWeather(formValues.location).subscribe(data => {
    //   this.weatherData = data;
    // });
    this.http
      .get('https://5d41b1f475f67300146b4336.mockapi.io/name/' + this.weatherSearchForm.value.location)
      .toPromise()
      .then((data) => {
        console.log(data);
        this.weatherData = data;
      });
    console.log(this.weatherSearchForm.value);
  }

  getWeather(location) {}
}
