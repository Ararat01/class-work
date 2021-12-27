import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  i = -1;
  countries = [
    {
      id: 1,
      countryName: 'Armenia',
      cities: [
        {
          id: 1,
          name: 'Gyumri'
        },
        {
          id: 2,
          name: 'Yerevan'
        }
      ]
    },
    {
      id: 2,
      countryName: 'Russia',
      cities: [
        {
          id: 1,
          name: 'Moscow'
        },
        {
          id: 2,
          name: 'Sochi'
        }
      ]
    },
    {
      id: 3,
      countryName: 'USA',
      cities: [
        {
          id: 1,
          name: 'Los Angeles'
        },
        {
          id: 2,
          name: 'New York'
        }
      ]
    },
    {
      id: 4,
      countryName: 'Italia',
      cities: [
        {
          id: 1,
          name: 'Rome'
        },
        {
          id: 2,
          name: 'Milan'
        }
      ]
    },
    {
      id: 5,
      countryName: 'Spain',
      cities: [
        {
          id: 1,
          name: 'Barcelona'
        },
        {
          id: 2,
          name: 'Madrid'
        }
      ]
    },
    {
      id: 6,
      countryName: 'France',
      cities: [
        {
          id: 1,
          name: 'Paris'
        },
        {
          id: 2,
          name: 'Marseille'
        }
      ]
    },
    {
      id: 7,
      countryName: 'Ukraine',
      cities: [
        {
          id: 1,
          name: 'Kyiv'
        },
        {
          id: 2,
          name: 'Odesa'
        }
      ]
    },
    {
      id: 8,
      countryName: 'Brazil',
      cities: [
        {
          id: 1,
          name: 'Rio de Janeiro'
        },
        {
          id: 2,
          name: 'Brasília'
        }
      ]
    },
    {
      id: 9,
      countryName: 'Germain',
      cities: [
        {
          id: 1,
          name: 'Berlin'
        },
        {
          id: 2,
          name: 'München'
        }
      ]
    },
    {
      id: 10,
      countryName: 'England',
      cities: [
        {
          id: 1,
          name: 'London'
        },
        {
          id: 2,
          name: 'Manchester'
        }
      ]
    }
  ];
}
