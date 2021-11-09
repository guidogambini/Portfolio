import React from "react";
import './TimeLine.css';


export default function TimeLine() {


    const width = window.screen.width;

    const data = width > 500 ? [
        {
          title: "2016",
          contentTitle: width > 800 ? "Journalism" : "General Journalism",
          where: "TEA",
          link: "https://www.teaydeportea.edu.ar/",
          hat: '🎓'
        },
        {
          title: "2018 - 2019",
          contentTitle: width > 800 ? "Content creator and web editor" : "Content creator",
          where: "Olé",
          link: 'https://www.ole.com.ar/autor/guido-gambini.html',
          hat: '👨🏼‍💼'
        },
        {
          title: "2020",
          contentTitle: width > 800 ? "Degree in Communication Science" : "Communication Science",
          where: "UADE",
          link: 'https://www.uade.edu.ar/',
          hat: '🎓'
        },
        {
          title: "2020",
          contentTitle: "Data Science",
          where: "Acámica",
          link: 'https://www.acamica.com/',
          hat: '🎓'
        },
        {
          title: "2021",
          contentTitle: width > 800 ? "Degree in Political Science" : "Political Science",
          where: "USAL",
          link: 'http://www.usal.edu.ar/usal_carreras-grado',
          hat: '🎓'
        },
        {
          title: "2021",
          contentTitle: width > 800 ? "Web Full-Stack Development" : "Web Development",
          where: "Henry",
          link: 'https://certificates.soyhenry.com/cert?id=ed87b686-5aab-46cb-b494-8d7b716bef8c',
          hat: '🎓'
        },
        {
          title: "2021",
          contentTitle: "Teaching Assistance",
          where: "Henry",
          link: 'https://www.soyhenry.com/',
          hat: '👨🏼‍💼'
        }
      ]

      :

      [
        {
          title: "2016",
          contentTitle: width > 800 ? "Journalism" : "General Journalism",
          where: "TEA",
          link: "https://www.teaydeportea.edu.ar/",
          hat: '🎓'
        },
        {
          title: "2020",
          contentTitle: width > 800 ? "Degree in Communication Science" : "Communication Science",
          where: "UADE",
          link: 'https://www.uade.edu.ar/',
          hat: '🎓'
        },
        {
          title: "2020",
          contentTitle: "Data Science",
          where: "Acámica",
          link: 'https://www.acamica.com/',
          hat: '🎓'
        },
        {
          title: "2021",
          contentTitle: width > 800 ? "Degree in Political Science" : "Political Science",
          where: "USAL",
          link: 'http://www.usal.edu.ar/usal_carreras-grado',
          hat: '🎓'
        },
        {
          title: "2021",
          contentTitle: width > 800 ? "Web Full-Stack Development" : "Web Development",
          where: "Henry",
          link: 'https://certificates.soyhenry.com/cert?id=ed87b686-5aab-46cb-b494-8d7b716bef8c',
          hat: '🎓'
        }
      ]

  return (
    <div className="timeline">
      
        {

            data && data.map(element => 
                      <ul className='unordered'>
                            <li className='hat'>{element.hat}</li>
                            <li className='tit'>{element.title}</li>
                            <li className='subtit'>{element.contentTitle}</li>
                            <li className='where'><a href={element.link} target='_blank' className='whereLink'>{element.where}</a></li>
                      </ul>
                    
            )

        }
      
    </div>
  );

}