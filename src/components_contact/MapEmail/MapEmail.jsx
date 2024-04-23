import React from 'react'
import  "./css.index.css"
function MapEmail() {
  return (
    <div>
        <div className='wrapperC'>
            <div className="locationC">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d787.1226024205682!2d58.37207101265656!3d37.895598446608055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f6ffd7fce0e0049%3A0x2f5c389e27643b5d!2z0JHQuNC30L3QtdGBLdGG0LXQvdGC0YAgItCh0L_QvtGA0YIi!5e0!3m2!1sru!2s!4v1711371481898!5m2!1sru!2s"></iframe>
                <p>We're here to help! Whether you have a question, need support, or want to provide feedback, we'd love to hear from you.</p>
            </div>

            <form method="POST" class="form" data-form-title="Form Name">
                
                <input type="text" className="input_placeC" name="Name" placeholder="Your Name" />
                <div className="dividerE"></div>
                <input type="email" className="input_placeC" name="Name" placeholder="Your Email" />
                <div className="dividerE"></div>
                <input type="tel" className="input_placeC" name="Name" placeholder="Phone Number" />
                <div className="dividerE"></div>
                <textarea className="text_areaC" placeholder="Your message"></textarea>
                <div class="submit_button_div"><button type="submit" class="submit_button">Send Message</button></div>
                    
            </form>
        </div>
    </div>
  )
}

export default MapEmail