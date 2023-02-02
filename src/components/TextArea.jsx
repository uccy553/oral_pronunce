import React from 'react'
import '../styles/TextArea.css'
import { images } from '../constants/images'





const TextArea = () => {
  return (
    <section className='area_text'>
        <div className='area_image'>
            {images.map((image) => (
                <div key={image.id} className="image_area">
                    <img src={image.image} alt="image" className='i_mage' />
                </div>
            ))}
        </div>

        <div className='area_overview'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est modi distinctio mollitia officia quo quas, rerum dolores ipsam sed corporis aliquid eaque? Id recusandae molestiae nihil praesentium odit quod debitis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae placeat doloribus ad assumenda aliquid hic, aspernatur quisquam esse distinctio. Voluptatibus sit quas maiores veniam corporis blanditiis ipsa labore tenetur quis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, ipsum voluptatum voluptate quo repudiandae quae sint temporibus a fugiat odit accusantium, provident sunt quas repellat molestias reiciendis tenetur? Veritatis, eligendi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed omnis quisquam alias magnam corrupti laboriosam, ex voluptas saepe quam ea porro aliquam nobis maiores amet, quas, quis deserunt cumque pariatur? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique non ad cumque, quasi laborum eius inventore doloremque magnam et molestiae optio expedita possimus corrupti minima illo perspiciatis, quam commodi quas! Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, nihil. Commodi exercitationem deserunt, id voluptates voluptatem aspernatur illo iste aliquam delectus saepe culpa ullam sint eaque unde adipisci perferendis ipsam! Lorem ipsum dolor sit amet consectetur adipisicing elit. In repellendus et placeat facilis sed rem quod ipsa. Adipisci, necessitatibus sequi mollitia nam quasi autem, odit distinctio ratione maiores aspernatur reiciendis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ea mollitia ad minus itaque, ex, rem porro possimus illo nobis assumenda animi quod quia modi, voluptatibus ut quidem suscipit iure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit voluptatibus cupiditate, hic necessitatibus ex explicabo doloribus consectetur error incidunt dicta odio maxime, est libero alias sunt. Quos laborum rerum veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim quo, deserunt possimus unde deleniti excepturi rem perspiciatis eveniet? Beatae iusto quae eveniet consequatur amet modi obcaecati saepe suscipit sunt enim.</p>
        </div>
    </section>
  )
}

export default TextArea