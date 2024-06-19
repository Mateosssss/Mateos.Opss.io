import {readFromLocalStorage,LS_KEY} from './localstorage.js'

export const cars=readFromLocalStorage(LS_KEY);
export const cars_list=document.querySelector('.load_cars');
export const car_template=document.querySelector('car_item');

export const addCars=(car)=>{
    const car_entry=document.createElement('div');
    car_entry.id=car.id;
    const car_item=car_template.cloneNode(true);

    car_item.querySelector('#carImage1').src=car.photo;
    car_item.querySelector('#car1_Title').innerText=car.name;
    car_item.querySelector('#car1_Description').innerText=car.description;
    car_item.querySelector('#car1_price').innerText=car.price;

    car_entry.append(car_item);
    cars_list.append(car_entry);
};

export const Refresh=()=>{
    cars.forEach(x=>{
        addCars(x);
    });
};
