import React from 'react'
import './Project.css'
export default function Project() {
  return (
    <div className='project-container'>
      <div className='Project'>
        <div className='project-head'>
            <h5 className='project-title'><i className='fa fa-star mr-2'></i><b>Online old and new book buying and selling system</b></h5>
            <a href="https://github.com/rk0775/Online-old-and-new-book-buying-and-selling-system"><i className='fa fa-github git-icon text-muted'></i></a>
        </div>
        <div className='project-dis text-justify'>
            <p>In this project I'm develop the online book buying and selling portal in Java and springboot. This project like e - bookstore website. A user can buy the books or can uploade their books to resell them on the online.</p>
        </div>
      </div>

      <div className='Project'>
        <div className='project-head'>
            <h5 className='project-title'><i className='fa fa-star mr-2'></i><b>House rent management system</b></h5>
            <a href="https://github.com/rk0775/House-Management-System"><i className='fa fa-github git-icon text-muted'></i></a>
        </div>
        <div className='project-dis text-justify'>
            <p>The house Rent Management System project is really made for the tenant's and the property owner. The owner of the property can rent or sell his property to the tenant. In this project we show property (house) to persons who need property to rent or buy . People who require property for rent can directly contact the property owner and book their property for rent.</p>
        </div>
      </div>

      <div className='Project'>
        <div className='project-head'>
            <h5 className='project-title'><i className='fa fa-star mr-2'></i><b>Online-food-ordering-system</b></h5>
            <a href="https://github.com/rk0775/Online-food-ordering-system"><i className='fa fa-github git-icon text-muted'></i></a>
        </div>
        <div className='project-dis text-justify'>
            <p>This is simple online food ordering website . Technologys : nodeJs, express , HTML , CSS , Bootstrap , JavaScript, mongodb</p>
        </div>
      </div>

      <div className='Project'>
        <div className='project-head'>
            <h5 className='project-title'><i className='fa fa-star mr-2'></i><b>Chat Bot</b></h5>
            <a href="https://github.com/rk0775/chat_bot"><i className='fa fa-github git-icon text-muted'></i></a>
        </div>
        <div className='project-dis text-justify'>
            <p>This is Simple chatbot application create using ReactJs and firebase.</p>
        </div>
      </div>
    </div>
  )
}
