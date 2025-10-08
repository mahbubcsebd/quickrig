const blogsData = [
  {
    id: 1,
    slug: 'job-ready-rentals',
    title: 'Job-Ready Rentals',
    excerpt:
      'Every unit is fully inspected and maintained for performance and safety—ready to use.',
    tableOfContents: [
      { id: 'introduction', title: 'Introduction' },
      { id: 'quality-equipment', title: 'Quality Equipment You Can Trust' },
      { id: 'safety-first', title: 'Safety First Approach' },
      { id: 'conclusion', title: 'Conclusion' },
    ],
    content: `
      <div id="introduction">
        <p>In a world older and more complete than ours they move finished and convey themselves more completely ahead of the senses we have lost or never attained, living by voices we shall never hear.</p>

        <p>Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisl, tellus tincidunt.</p>
      </div>

      <div id="quality-equipment">
        <h2>Quality Equipment You Can Trust</h2>
        <p>Our rental fleet consists of modern, well-maintained equipment that undergoes rigorous inspection and maintenance schedules. Each unit is tested before delivery to ensure optimal performance on your job site.</p>

        <p>We understand that downtime can be costly, which is why we prioritize equipment reliability. Our maintenance team works around the clock to ensure that every piece of equipment meets our strict quality standards.</p>

        <div class="content-item">
          <p class="quote">"In a world older and more complete than ours they move finished and complete, gifted with extensions of the senses we have lost or never attained, living by voices we shall never hear."</p>
          <div class="author-info">
            <div class="author-avatar">OR</div>
            <div>
              <p class="author-name">Olivia Rhye</p>
              <p class="author-role">Product Designer</p>
            </div>
          </div>
        </div>

        <p>Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam.</p>
      </div>

      <div id="safety-first">
        <h2>Safety First Approach</h2>
        <p>Safety is not just a priority—it's a fundamental value. All our equipment comes with comprehensive safety documentation and operator manuals. We also provide training resources to help your team operate equipment safely and efficiently.</p>

        <ul>
          <li>Regular safety inspections by certified technicians</li>
          <li>Up-to-date maintenance records available for all equipment</li>
          <li>Compliance with industry safety standards and regulations</li>
          <li>24/7 emergency support for any equipment issues</li>
        </ul>

        <p>Elit nisl in eleifend sed nisl. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam.</p>
      </div>

      <div id="conclusion">
        <h2>Conclusion</h2>
        <p>When you choose our job-ready rentals, you're not just getting equipment—you're getting peace of mind. Our commitment to quality and safety ensures that your projects run smoothly from start to finish.</p>

        <p>Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultrices. Duis est sit sed leo nisl, blandit elit sagittis. Odio felis tristique consequat quis sed.</p>

        <div class="tags">
          <span class="tag">Design</span>
          <span class="tag">Research</span>
        </div>
      </div>
    `,
    image:
      'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&h=500&fit=crop',
    author: 'John Smith',
    date: '2024-03-15',
    readTime: '5 min read',
    category: 'Equipment',
  },
  {
    id: 2,
    slug: 'time-saving-scheduling',
    title: 'Time-Saving Scheduling',
    excerpt:
      'Every unit is fully inspected and maintained for performance and safety—ready to use.',
    tableOfContents: [
      { id: 'introduction', title: 'Introduction' },
      { id: 'streamlined-booking', title: 'Streamlined Booking Process' },
      { id: 'flexible-scheduling', title: 'Flexible Scheduling Options' },
      { id: 'conclusion', title: 'Conclusion' },
    ],
    content: `
      <div id="introduction">
        <p>Efficient scheduling can make or break a project timeline. Our advanced scheduling system is designed to save you time and reduce administrative hassle.</p>

        <p>Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit.</p>
      </div>

      <div id="streamlined-booking">
        <h2>Streamlined Booking Process</h2>
        <p>Gone are the days of endless phone calls and paperwork. Our digital platform allows you to browse available equipment, check real-time availability, and book rentals in minutes. The intuitive interface makes it easy to manage multiple rentals across different job sites.</p>

        <p>Our system automatically handles:</p>
        <ul>
          <li>Equipment availability checks across all locations</li>
          <li>Delivery scheduling and route optimization</li>
          <li>Automated reminders for pickup and return dates</li>
          <li>Digital documentation and invoicing</li>
        </ul>
      </div>

      <div id="flexible-scheduling">
        <h2>Flexible Scheduling Options</h2>
        <p>We understand that construction projects don't always go according to plan. That's why we offer flexible scheduling options including last-minute bookings, extended rentals, and easy modification of existing reservations.</p>

        <p>Our dedicated support team is available to help you adjust schedules as your project needs change, ensuring you always have the right equipment at the right time.</p>
      </div>

      <div id="conclusion">
        <h2>Conclusion</h2>
        <p>Time is money in the construction industry. Our scheduling system is built to give you back both, allowing you to focus on what matters most—completing your projects successfully.</p>

        <div class="tags">
          <span class="tag">Technology</span>
          <span class="tag">Productivity</span>
        </div>
      </div>
    `,
    image:
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=500&fit=crop',
    author: 'Sarah Johnson',
    date: '2024-03-10',
    readTime: '4 min read',
    category: 'Technology',
  },
  {
    id: 3,
    slug: 'delivery-to-your-site',
    title: 'Delivery to Your Site',
    excerpt:
      'Every unit is fully inspected and maintained for performance and safety—ready to use.',
    tableOfContents: [
      { id: 'introduction', title: 'Introduction' },
      { id: 'professional-delivery', title: 'Professional Delivery Team' },
      { id: 'coverage', title: 'Coverage You Can Count On' },
      { id: 'return-made-easy', title: 'Return Made Easy' },
      { id: 'conclusion', title: 'Conclusion' },
    ],
    content: `
      <div id="introduction">
        <p>Getting equipment to your job site shouldn't be a logistical nightmare. Our comprehensive delivery service ensures your equipment arrives on time, every time.</p>

        <p>Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis.</p>
      </div>

      <div id="professional-delivery">
        <h2>Professional Delivery Team</h2>
        <p>Our experienced delivery drivers know the local area inside and out. They're trained not just in safe driving, but in proper equipment handling and site protocols. Each delivery includes:</p>

        <ul>
          <li>Pre-delivery site assessment to ensure safe placement</li>
          <li>Professional unloading using appropriate equipment</li>
          <li>Basic operation walkthrough with your team</li>
          <li>Safety checklist verification before departure</li>
        </ul>
      </div>

      <div id="coverage">
        <h2>Coverage You Can Count On</h2>
        <p>We maintain a fleet of delivery vehicles ranging from small vans to heavy-duty transporters, ensuring we can deliver any piece of equipment, regardless of size. Our service area covers the entire region, with options for rush delivery when you need equipment immediately.</p>

        <p>Real-time tracking allows you to monitor your delivery from dispatch to arrival, giving you complete visibility and peace of mind.</p>
      </div>

      <div id="return-made-easy">
        <h2>Return Made Easy</h2>
        <p>When your project is complete, we make pickup just as convenient as delivery. Schedule a pickup time that works for you, and our team will handle the rest. We inspect equipment on-site to ensure a smooth return process.</p>
      </div>

      <div id="conclusion">
        <h2>Conclusion</h2>
        <p>Reliable delivery is crucial to project success. With our professional delivery service, you can trust that your equipment will arrive safely, on time, and ready to work.</p>

        <div class="tags">
          <span class="tag">Logistics</span>
          <span class="tag">Service</span>
        </div>
      </div>
    `,
    image:
      'https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=800&h=500&fit=crop',
    author: 'Mike Davis',
    date: '2024-03-05',
    readTime: '6 min read',
    category: 'Logistics',
  },
  {
    id: 4,
    slug: 'job-ready-rentals',
    title: 'Job-Ready Rentals',
    excerpt:
      'Every unit is fully inspected and maintained for performance and safety—ready to use.',
    tableOfContents: [
      { id: 'introduction', title: 'Introduction' },
      { id: 'quality-equipment', title: 'Quality Equipment You Can Trust' },
      { id: 'safety-first', title: 'Safety First Approach' },
      { id: 'conclusion', title: 'Conclusion' },
    ],
    content: `
      <div id="introduction">
        <p>In a world older and more complete than ours they move finished and convey themselves more completely ahead of the senses we have lost or never attained, living by voices we shall never hear.</p>

        <p>Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisl, tellus tincidunt.</p>
      </div>

      <div id="quality-equipment">
        <h2>Quality Equipment You Can Trust</h2>
        <p>Our rental fleet consists of modern, well-maintained equipment that undergoes rigorous inspection and maintenance schedules. Each unit is tested before delivery to ensure optimal performance on your job site.</p>

        <p>We understand that downtime can be costly, which is why we prioritize equipment reliability. Our maintenance team works around the clock to ensure that every piece of equipment meets our strict quality standards.</p>

        <div class="content-item">
          <p class="quote">"In a world older and more complete than ours they move finished and complete, gifted with extensions of the senses we have lost or never attained, living by voices we shall never hear."</p>
          <div class="author-info">
            <div class="author-avatar">OR</div>
            <div>
              <p class="author-name">Olivia Rhye</p>
              <p class="author-role">Product Designer</p>
            </div>
          </div>
        </div>

        <p>Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam.</p>
      </div>

      <div id="safety-first">
        <h2>Safety First Approach</h2>
        <p>Safety is not just a priority—it's a fundamental value. All our equipment comes with comprehensive safety documentation and operator manuals. We also provide training resources to help your team operate equipment safely and efficiently.</p>

        <ul>
          <li>Regular safety inspections by certified technicians</li>
          <li>Up-to-date maintenance records available for all equipment</li>
          <li>Compliance with industry safety standards and regulations</li>
          <li>24/7 emergency support for any equipment issues</li>
        </ul>

        <p>Elit nisl in eleifend sed nisl. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam.</p>
      </div>

      <div id="conclusion">
        <h2>Conclusion</h2>
        <p>When you choose our job-ready rentals, you're not just getting equipment—you're getting peace of mind. Our commitment to quality and safety ensures that your projects run smoothly from start to finish.</p>

        <p>Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultrices. Duis est sit sed leo nisl, blandit elit sagittis. Odio felis tristique consequat quis sed.</p>

        <div class="tags">
          <span class="tag">Design</span>
          <span class="tag">Research</span>
        </div>
      </div>
    `,
    image:
      'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&h=500&fit=crop',
    author: 'John Smith',
    date: '2024-03-15',
    readTime: '5 min read',
    category: 'Equipment',
  },
  {
    id: 5,
    slug: 'time-saving-scheduling',
    title: 'Time-Saving Scheduling',
    excerpt:
      'Every unit is fully inspected and maintained for performance and safety—ready to use.',
    tableOfContents: [
      { id: 'introduction', title: 'Introduction' },
      { id: 'streamlined-booking', title: 'Streamlined Booking Process' },
      { id: 'flexible-scheduling', title: 'Flexible Scheduling Options' },
      { id: 'conclusion', title: 'Conclusion' },
    ],
    content: `
      <div id="introduction">
        <p>Efficient scheduling can make or break a project timeline. Our advanced scheduling system is designed to save you time and reduce administrative hassle.</p>

        <p>Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit.</p>
      </div>

      <div id="streamlined-booking">
        <h2>Streamlined Booking Process</h2>
        <p>Gone are the days of endless phone calls and paperwork. Our digital platform allows you to browse available equipment, check real-time availability, and book rentals in minutes. The intuitive interface makes it easy to manage multiple rentals across different job sites.</p>

        <p>Our system automatically handles:</p>
        <ul>
          <li>Equipment availability checks across all locations</li>
          <li>Delivery scheduling and route optimization</li>
          <li>Automated reminders for pickup and return dates</li>
          <li>Digital documentation and invoicing</li>
        </ul>
      </div>

      <div id="flexible-scheduling">
        <h2>Flexible Scheduling Options</h2>
        <p>We understand that construction projects don't always go according to plan. That's why we offer flexible scheduling options including last-minute bookings, extended rentals, and easy modification of existing reservations.</p>

        <p>Our dedicated support team is available to help you adjust schedules as your project needs change, ensuring you always have the right equipment at the right time.</p>
      </div>

      <div id="conclusion">
        <h2>Conclusion</h2>
        <p>Time is money in the construction industry. Our scheduling system is built to give you back both, allowing you to focus on what matters most—completing your projects successfully.</p>

        <div class="tags">
          <span class="tag">Technology</span>
          <span class="tag">Productivity</span>
        </div>
      </div>
    `,
    image:
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=500&fit=crop',
    author: 'Sarah Johnson',
    date: '2024-03-10',
    readTime: '4 min read',
    category: 'Technology',
  },
  {
    id: 6,
    slug: 'delivery-to-your-site',
    title: 'Delivery to Your Site',
    excerpt:
      'Every unit is fully inspected and maintained for performance and safety—ready to use.',
    tableOfContents: [
      { id: 'introduction', title: 'Introduction' },
      { id: 'professional-delivery', title: 'Professional Delivery Team' },
      { id: 'coverage', title: 'Coverage You Can Count On' },
      { id: 'return-made-easy', title: 'Return Made Easy' },
      { id: 'conclusion', title: 'Conclusion' },
    ],
    content: `
      <div id="introduction">
        <p>Getting equipment to your job site shouldn't be a logistical nightmare. Our comprehensive delivery service ensures your equipment arrives on time, every time.</p>

        <p>Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis.</p>
      </div>

      <div id="professional-delivery">
        <h2>Professional Delivery Team</h2>
        <p>Our experienced delivery drivers know the local area inside and out. They're trained not just in safe driving, but in proper equipment handling and site protocols. Each delivery includes:</p>

        <ul>
          <li>Pre-delivery site assessment to ensure safe placement</li>
          <li>Professional unloading using appropriate equipment</li>
          <li>Basic operation walkthrough with your team</li>
          <li>Safety checklist verification before departure</li>
        </ul>
      </div>

      <div id="coverage">
        <h2>Coverage You Can Count On</h2>
        <p>We maintain a fleet of delivery vehicles ranging from small vans to heavy-duty transporters, ensuring we can deliver any piece of equipment, regardless of size. Our service area covers the entire region, with options for rush delivery when you need equipment immediately.</p>

        <p>Real-time tracking allows you to monitor your delivery from dispatch to arrival, giving you complete visibility and peace of mind.</p>
      </div>

      <div id="return-made-easy">
        <h2>Return Made Easy</h2>
        <p>When your project is complete, we make pickup just as convenient as delivery. Schedule a pickup time that works for you, and our team will handle the rest. We inspect equipment on-site to ensure a smooth return process.</p>
      </div>

      <div id="conclusion">
        <h2>Conclusion</h2>
        <p>Reliable delivery is crucial to project success. With our professional delivery service, you can trust that your equipment will arrive safely, on time, and ready to work.</p>

        <div class="tags">
          <span class="tag">Logistics</span>
          <span class="tag">Service</span>
        </div>
      </div>
    `,
    image:
      'https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=800&h=500&fit=crop',
    author: 'Mike Davis',
    date: '2024-03-05',
    readTime: '6 min read',
    category: 'Logistics',
  },
  {
    id: 7,
    slug: 'job-ready-rentals',
    title: 'Job-Ready Rentals',
    excerpt:
      'Every unit is fully inspected and maintained for performance and safety—ready to use.',
    tableOfContents: [
      { id: 'introduction', title: 'Introduction' },
      { id: 'quality-equipment', title: 'Quality Equipment You Can Trust' },
      { id: 'safety-first', title: 'Safety First Approach' },
      { id: 'conclusion', title: 'Conclusion' },
    ],
    content: `
      <div id="introduction">
        <p>In a world older and more complete than ours they move finished and convey themselves more completely ahead of the senses we have lost or never attained, living by voices we shall never hear.</p>

        <p>Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisl, tellus tincidunt.</p>
      </div>

      <div id="quality-equipment">
        <h2>Quality Equipment You Can Trust</h2>
        <p>Our rental fleet consists of modern, well-maintained equipment that undergoes rigorous inspection and maintenance schedules. Each unit is tested before delivery to ensure optimal performance on your job site.</p>

        <p>We understand that downtime can be costly, which is why we prioritize equipment reliability. Our maintenance team works around the clock to ensure that every piece of equipment meets our strict quality standards.</p>

        <div class="content-item">
          <p class="quote">"In a world older and more complete than ours they move finished and complete, gifted with extensions of the senses we have lost or never attained, living by voices we shall never hear."</p>
          <div class="author-info">
            <div class="author-avatar">OR</div>
            <div>
              <p class="author-name">Olivia Rhye</p>
              <p class="author-role">Product Designer</p>
            </div>
          </div>
        </div>

        <p>Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam.</p>
      </div>

      <div id="safety-first">
        <h2>Safety First Approach</h2>
        <p>Safety is not just a priority—it's a fundamental value. All our equipment comes with comprehensive safety documentation and operator manuals. We also provide training resources to help your team operate equipment safely and efficiently.</p>

        <ul>
          <li>Regular safety inspections by certified technicians</li>
          <li>Up-to-date maintenance records available for all equipment</li>
          <li>Compliance with industry safety standards and regulations</li>
          <li>24/7 emergency support for any equipment issues</li>
        </ul>

        <p>Elit nisl in eleifend sed nisl. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam.</p>
      </div>

      <div id="conclusion">
        <h2>Conclusion</h2>
        <p>When you choose our job-ready rentals, you're not just getting equipment—you're getting peace of mind. Our commitment to quality and safety ensures that your projects run smoothly from start to finish.</p>

        <p>Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultrices. Duis est sit sed leo nisl, blandit elit sagittis. Odio felis tristique consequat quis sed.</p>

        <div class="tags">
          <span class="tag">Design</span>
          <span class="tag">Research</span>
        </div>
      </div>
    `,
    image:
      'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&h=500&fit=crop',
    author: 'John Smith',
    date: '2024-03-15',
    readTime: '5 min read',
    category: 'Equipment',
  },
  {
    id: 8,
    slug: 'time-saving-scheduling',
    title: 'Time-Saving Scheduling',
    excerpt:
      'Every unit is fully inspected and maintained for performance and safety—ready to use.',
    tableOfContents: [
      { id: 'introduction', title: 'Introduction' },
      { id: 'streamlined-booking', title: 'Streamlined Booking Process' },
      { id: 'flexible-scheduling', title: 'Flexible Scheduling Options' },
      { id: 'conclusion', title: 'Conclusion' },
    ],
    content: `
      <div id="introduction">
        <p>Efficient scheduling can make or break a project timeline. Our advanced scheduling system is designed to save you time and reduce administrative hassle.</p>

        <p>Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit.</p>
      </div>

      <div id="streamlined-booking">
        <h2>Streamlined Booking Process</h2>
        <p>Gone are the days of endless phone calls and paperwork. Our digital platform allows you to browse available equipment, check real-time availability, and book rentals in minutes. The intuitive interface makes it easy to manage multiple rentals across different job sites.</p>

        <p>Our system automatically handles:</p>
        <ul>
          <li>Equipment availability checks across all locations</li>
          <li>Delivery scheduling and route optimization</li>
          <li>Automated reminders for pickup and return dates</li>
          <li>Digital documentation and invoicing</li>
        </ul>
      </div>

      <div id="flexible-scheduling">
        <h2>Flexible Scheduling Options</h2>
        <p>We understand that construction projects don't always go according to plan. That's why we offer flexible scheduling options including last-minute bookings, extended rentals, and easy modification of existing reservations.</p>

        <p>Our dedicated support team is available to help you adjust schedules as your project needs change, ensuring you always have the right equipment at the right time.</p>
      </div>

      <div id="conclusion">
        <h2>Conclusion</h2>
        <p>Time is money in the construction industry. Our scheduling system is built to give you back both, allowing you to focus on what matters most—completing your projects successfully.</p>

        <div class="tags">
          <span class="tag">Technology</span>
          <span class="tag">Productivity</span>
        </div>
      </div>
    `,
    image:
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=500&fit=crop',
    author: 'Sarah Johnson',
    date: '2024-03-10',
    readTime: '4 min read',
    category: 'Technology',
  },
  {
    id: 9,
    slug: 'delivery-to-your-site',
    title: 'Delivery to Your Site',
    excerpt:
      'Every unit is fully inspected and maintained for performance and safety—ready to use.',
    tableOfContents: [
      { id: 'introduction', title: 'Introduction' },
      { id: 'professional-delivery', title: 'Professional Delivery Team' },
      { id: 'coverage', title: 'Coverage You Can Count On' },
      { id: 'return-made-easy', title: 'Return Made Easy' },
      { id: 'conclusion', title: 'Conclusion' },
    ],
    content: `
      <div id="introduction">
        <p>Getting equipment to your job site shouldn't be a logistical nightmare. Our comprehensive delivery service ensures your equipment arrives on time, every time.</p>

        <p>Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis.</p>
      </div>

      <div id="professional-delivery">
        <h2>Professional Delivery Team</h2>
        <p>Our experienced delivery drivers know the local area inside and out. They're trained not just in safe driving, but in proper equipment handling and site protocols. Each delivery includes:</p>

        <ul>
          <li>Pre-delivery site assessment to ensure safe placement</li>
          <li>Professional unloading using appropriate equipment</li>
          <li>Basic operation walkthrough with your team</li>
          <li>Safety checklist verification before departure</li>
        </ul>
      </div>

      <div id="coverage">
        <h2>Coverage You Can Count On</h2>
        <p>We maintain a fleet of delivery vehicles ranging from small vans to heavy-duty transporters, ensuring we can deliver any piece of equipment, regardless of size. Our service area covers the entire region, with options for rush delivery when you need equipment immediately.</p>

        <p>Real-time tracking allows you to monitor your delivery from dispatch to arrival, giving you complete visibility and peace of mind.</p>
      </div>

      <div id="return-made-easy">
        <h2>Return Made Easy</h2>
        <p>When your project is complete, we make pickup just as convenient as delivery. Schedule a pickup time that works for you, and our team will handle the rest. We inspect equipment on-site to ensure a smooth return process.</p>
      </div>

      <div id="conclusion">
        <h2>Conclusion</h2>
        <p>Reliable delivery is crucial to project success. With our professional delivery service, you can trust that your equipment will arrive safely, on time, and ready to work.</p>

        <div class="tags">
          <span class="tag">Logistics</span>
          <span class="tag">Service</span>
        </div>
      </div>
    `,
    image:
      'https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=800&h=500&fit=crop',
    author: 'Mike Davis',
    date: '2024-03-05',
    readTime: '6 min read',
    category: 'Logistics',
  },
];

export default blogsData;
