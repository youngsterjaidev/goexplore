import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Slideshow from "../components/SlideShow";
import { useNavigate } from "react-router-dom";

const BannerSection = () => {
  const [packages, setPackages] = useState(dummyData);
  const navigate = useNavigate();

  const fetchPackages = async () => {
    try {
      const res = await fetch("/.netlify/functions/packages");
      const data = await res.json();
      setPackages(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  return (
    <>
      <section className="bg-blue-50 p-[2rem_8rem]">
        <div
          // style={{
          //   background:
          //     'url("https://images.pexels.com/photos/5205097/pexels-photo-5205097.jpeg?auto=compress&cs=tinysrgb&w=1200") no-repeat',
          //   backgroundSize: "cover",
          //   backgroundPosition: "0px -1px",
          // }}
          className="py-[5rem] flex justify-center items-center"
        >
          <div>
            <h1
              // style={{ textShadow: "-2px 2px 20px #0000005c" }}
              className="text-center text-6xl text-blue-500 py-2"
            >
              Explore the World, One Journey at a Time
            </h1>
            <p className="text-center text-xl text-black-800">
              Explore the World, One Journey at a Time
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <input
            className="p-4 w-[20%] rounded-lg bg-white shadow-xl text-center placeholder:text-center outline-none"
            type=""
            placeholder="Start your search"
          />
        </div>
        <div className="py-[7rem] flex justify-around items-center gap-8">
          <div className="flex items-center gap-8">
            <div className="flex-[1_0_250px] aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3276841/pexels-photo-3276841.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Placeholder"
              />
            </div>
            <div>
              <h2 className="text-blue-400 font-bold text-4xl">Manali</h2>
              <div className="text-blue-950">
                Nestled in the breathtaking valleys of Himachal Pradesh, Manali
                is a dream destination for nature lovers, adventure seekers, and
                peace enthusiasts alike.
              </div>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <div className="flex-[1_0_250px] aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/2418400/pexels-photo-2418400.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Placeholder"
              />
            </div>
            <div>
              <h2 className="text-blue-400 font-bold text-4xl">Shimla</h2>
              <div className="text-blue-950">
                Step into the timeless charm of Shimla, the capital city of
                Himachal Pradesh, where colonial elegance meets natural beauty.
                Perched amidst the lush Shivalik range
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-8 w-[50%] mx-auto">
          <div className="flex-[1_0_250px] rounded-lg overflow-hidden">
            <img
              src="https://images.pexels.com/photos/16468605/pexels-photo-16468605/free-photo-of-people-on-boat-on-lake-under-clouds-and-fog.jpeg?auto=compress&cs=tinysrgb&w=12000"
              alt="Placeholder"
            />
          </div>
          <div>
            <h2 className="text-blue-400 font-bold text-4xl">Kashmir</h2>
            <div className="text-blue-950">
              Step into the timeless charm of Shimla, the capital city of
              Himachal Pradesh, where colonial elegance meets natural beauty.
              Perched amidst the lush Shivalik range
            </div>
          </div>
        </div>
        <div className="py-[5rem]">
          <h2 className="text-center text-4xl font-bold text-blue-400">
            Popular packages
          </h2>
          <div className="flex justify-around gap-[4rem] overflow-x-auto py-[3rem] scrollbar-hide">
            {packages.map((pack) => (
              <div
                className="cursor-pointer flex flex-[1_0_600px] items-center gap-8 bg-white p-4 rounded-lg border border-gray-200"
                onClick={() => navigate(`/package/${pack.package_name}`)}
              >
                <div
                  style={{
                    background:
                      "url(https://images.pexels.com/photos/142497/pexels-photo-142497.jpeg?auto=compress&cs=tinysrgb&w=1200)",
                  }}
                  className="flex-[1_0_250px] aspect-video rounded-lg overflow-hidden"
                ></div>
                <div>
                  <h2 className="text-blue-400 font-bold text-xl">
                    {pack.package_name || "Shimla and Manali - 5N and 6D"}
                  </h2>
                  <div className="text-blue-950">
                    Nestled in the breathtaking valleys of Himachal Pradesh,
                    Manali is a dream destination for nature lovers, adventure
                    seekers, and peace enthusiasts alike.
                  </div>
                  <div className="font-bold text-black">
                    {pack.pricing[0].rate}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

function Home() {
  const [count, setCount] = useState(0);
  const images = [
    "https://images.pexels.com/photos/31143437/pexels-photo-31143437/free-photo-of-snowy-mountain-vista-in-gulmarg-kashmir.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/31044093/pexels-photo-31044093/free-photo-of-historic-architecture-with-mountain-backdrop.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/25786569/pexels-photo-25786569/free-photo-of-a-boat-on-a-lake.jpeg?auto=compress&cs=tinysrgb&w=1200",
  ];

  return (
    <>
      <BannerSection />
      <div className="mx-auto mt-10">
        <Slideshow images={images} interval={10000} />
      </div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
    </>
  );
}

export default Home;

const dummyData = [
  {
    package_name: "Shimla and Manali - 5N and 6D",
    inclusions: [
      "2 Nights hotel included in Shimla",
      "3 Nights hotel included in Manali",
      "Breakfast included",
      "Private taxi with private driver included for 06 Days",
      "Chandigarh Airport / Railway Station pickup and Drop",
      "Toll, parking fees and taxes included",
    ],
    exclusions: [
      "Airfare or Railway ticket",
      "Lunch and Dinner not included",
      "Extra activities at your own cost",
      "Travel Insurance",
      "Anything not mentioned in the itinerary will be extra",
      "Anything not included in the inclusions",
    ],
    pricing: [
      {
        rate: "INR 14000 /- per person",
        validity: "6th Jan to 15th April & 6th July to 15th December",
      },
      {
        rate: "INR 19000 /- per person (Season rate)",
        validity: "16th April - 5th July & 16th December to 5th Jan",
      },
    ],
    itinerary: [
      {
        day: 1,
        title: "Chandigarh - Shimla",
        description:
          "Once you reach Chandigarh Airport / Railway Station, our representative offers an assisted transfer to your first destination Shimla, by road. Fondly referred to as the ‘Queen of Hills’, Shimla is a very popular hill town of Himachal Pradesh. As you reach, check-in at the hotel. After settling into the rooms, the day is at your own discretion. Spend the day doing the activities of your interest. Dinner and overnight stay at the hotel.",
      },
      {
        day: 2,
        title: "Shimla Sightseeing",
        description:
          "Post breakfast; proceed for an excursion to Kufri, a must-visit place. Placed at an altitude of 2290 m above the sea level, Kufri is blessed with tranquility, scenery and is dotted with tourist attractions like Mahasu Peak, Chini Bungalow, Indira Tourist Park etc. When back in Shimla, visit the Vice Regal Lodge- once the summer residence of various British viceroys, it boasts of an interesting English Renaissance architecture. Thereafter in the evening, enjoy a leisure walk on the Mall Road. Delicious dinner and overnight stay.",
      },
      {
        day: 3,
        title: "Shimla - Manali",
        description:
          "After breakfast on the 3rd day, get transferred by road to Manali. Placed at an altitude of 2050 m above the sea level, Manali is a very popular hill station that is flocked by tourists every year in crazy numbers. On reaching, check-in at the hotel. Get some rest. The evening is at leisure. Take a walk on the main market road of Manali. Enjoy the bustling tourist activity, taste the local cuisine, enjoy the cool breeze and more. Dinner and overnight stay at the hotel in Manali.",
      },
      {
        day: 4,
        title: "Manali Sightseeing",
        description:
          "Today, get all set for visiting the prime attractions of Manali. Visit Hadimba Devi Temple- an ancient temple around 450 years old that is dedicated to Hadimba Devi wid one of the Pandava brothers Bhim. Later in the day explore the Tibetan Monastery and the handicraft centre. Take a walk up to the old Vashisht village. Back to the hotel for dinner and a night Stay.",
      },
      {
        day: 5,
        title: "Manali – Solang Valley – Manali",
        description:
          "Today we drove through the new tourist hotspot Atal Tunnel (Subject to Operation) – world's longest tunnel at an altitude of 10,040 feet. We view the Sissu Waterfall. Later we proceed to Solang Valley – a splendid valley in Solang village offering magnificent views of the glaciers and snow-capped mountains. Here we enjoy a Ropeway ride and admire the Himalayan mountains. Guests with an adventurous spirit can experience thrilling activities like Paragliding, Biking, Trekking and Hiking at an additional cost. Overnight in Manali.",
      },
      {
        day: 6,
        title: "Manali - Chandigarh",
        description:
          "Today is the last day of the tour. Relish an early morning breakfast. Complete the check-out formalities. Begin your drive back to Delhi. Get an assisted transfer to the Chandigarh railway station / Airport for your onward journey.",
      },
    ],
  },
  {
    package_name: "ROYAL HIMACHAL",
    inclusions: [
      "2 Nights hotel included in Shimla",
      "2 Nights hotel included in Manali",
      "2 Nights hotel included in Dharamshala",
      "2 Nights hotel included in Dalhousie",
      "Breakfast included",
      "Private taxi with private driver included for 09 Days",
      "Chandigarh Airport / Railway Station pickup and Drop",
      "Toll, parking fees and taxes included",
    ],
    exclusions: [
      "Airfare or Railway ticket",
      "Lunch and Dinner not included",
      "Extra activities at your own cost",
      "Travel Insurance",
      "Anything not mentioned in the itinerary will be extra",
      "Anything not included in the inclusions",
    ],
    pricing: [
      {
        rate: "INR 26000 /- per person",
        validity: "6th Jan to 15th April & 6th July to 15th December",
      },
      {
        rate: "INR 34000 /- per person (Season rate)",
        validity: "16th April - 5th July & 16th December to 5th Jan",
      },
    ],
    itinerary: [
      {
        day: 1,
        title: "Chandigarh - Shimla",
        description:
          "Once you reach Chandigarh Airport, our representative offers an assisted transfer to your first destination Shimla, by road. Fondly referred to as the ‘Queen of Hills’, Shimla is a very popular hill town of Himachal Pradesh. As you reach, check-in at the hotel. After settling into the rooms, the day is at your own discretion. Spend the day doing the activities of your interest. Dinner and overnight stay at the hotel.",
      },
      {
        day: 2,
        title: "Shimla Sightseeing",
        description:
          "Post breakfast; proceed for an excursion to Kufri, a must-visit place. Placed at an altitude of 2290 m above the sea level, Kufri is blessed with tranquility, scenery and is dotted with tourist attractions like Mahasu Peak, Chini Bungalow, Indira Tourist Park etc. When back in Shimla, visit the Vice Regal Lodge- once the summer residence of various British viceroys, it boasts of an interesting English Renaissance architecture. Thereafter in the evening, enjoy a leisure walk on the Mall Road. Delicious dinner and overnight stay.",
      },
      {
        day: 3,
        title: "Shimla - Manali",
        description:
          "After breakfast on the 3rd day, get transferred by road to Manali. Placed at an altitude of 2050 m above the sea level, Manali is a very popular hill station that is flocked by tourists every year in crazy numbers. On reaching, check-in at the hotel. Get some rest. The evening is at leisure. Take a walk on the main market road of Manali. Enjoy the bustling tourist activity, taste the local cuisine, enjoy the cool breeze and more. Dinner and overnight stay at the hotel in Manali.",
      },
      {
        day: 4,
        title: "Manali Sightseeing",
        description:
          "Visit the Vashisht Hot Springs for a relaxing bath. Explore the scenic Jogini Waterfall trek. Evening: Enjoy the vibrant nightlife in Manali.",
      },
      {
        day: 4,
        title: "Manali – Solang Valley – Manali",
        description:
          "Today we drive through the new tourist hotspot Atal Tunnel (Subject to Operation) – world's longest tunnel at an altitude of 10,040 feet. We view the Sissu Waterfall. Later we proceed to Solang Valley – a splendid valley in Solang village offering magnificent views of the glaciers and snow-capped mountains. Here we enjoy a Ropeway ride and admire the Himalayan mountains. Guests with an adventurous spirit can experience thrilling activities like Paragliding, Biking, Trekking and Hiking at an additional cost. Overnight in Manali.",
      },
      {
        day: 5,
        title: "Drive to Dharamshala",
        description:
          "Morning drive to Dharamshala. Check-in to your hotel. Overnight in Dharamshala.",
      },
      {
        day: 6,
        title: "Excursion to McLeod Ganj",
        description:
          "After a hearty breakfast, set out for an excursion to McLeod Ganj, a vibrant town known for its Tibetan culture. Visit the Namgyal Monastery, the residence of the Dalai Lama, and the Tsuglagkhang Complex. Don't miss the Tibetan Museum, which offers deep insights into Tibetan history and culture. Enjoy the peaceful ambiance of St. John in the Wilderness Church. Return to Dharamshala in the evening for an overnight stay.",
      },
      {
        day: 6,
        title: "Paragliding in Bir Billing",
        description:
          "Early morning paragliding flight over the stunning landscapes of Bir Billing. Afternoon: Visit the local Tibetan handicraft market or explore the nearby villages. Evening: Drive back to Dharamshala.",
      },
      {
        day: 7,
        title: "Dharamshala to Dalhousie",
        description:
          "After breakfast, embark on a scenic drive to Dalhousie, a charming hill station known for its colonial architecture and lush landscapes. Check into your hotel and spend the day exploring the Places To Visit In Dalhousie. Visit attractions such as St. Francis Church, Panchpula, and the enchanting Kalatop Wildlife Sanctuary. Enjoy a leisurely evening at Gandhi Chowk, soaking in the tranquil atmosphere. Return to your hotel for a restful night.",
      },
      {
        day: 8,
        title: "Excursion to Khajjiar",
        description:
          "Begin your day with a visit to Khajjiar, often called the 'Mini Switzerland of India.' Enjoy a leisurely walk around the Khajjiar Lake, surrounded by dense deodar forests. Visit the Khajji Nag Temple and appreciate the local architecture. Return to Dalhousie in the evening for an overnight stay.",
      },
      {
        day: 9,
        title: "Dalhousie to Chandigarh",
        description:
          "Today after breakfast, check out of the hotel and leave for Chandigarh for an onward journey.",
      },
    ],
  },
  {
    package_name: "Kashmir - 5N and 6D",
    inclusions: [
      "Stay included",
      "1 night stay in Pahalgam",
      "4 nights stay in Srinagar",
      "Breakfast and dinner included",
      "Sightseeing",
      "All tolls, parking charges, taxes included",
    ],
    exclusions: [
      "Flight ticket not included",
      "Lunch not included",
      "Extra activities at your own cost",
      "Anything not included in the inclusions",
    ],
    pricing: [
      {
        rate: "INR 18000 /- per person",
        validity: "15th Jan to 31st March",
      },
      {
        rate: "INR 22000 /- per person (Season rate)",
        validity: "1st April - 5th July",
      },
    ],
    itinerary: [
      {
        day: 1,
        title: "ARRIVE SRINAGAR",
        description:
          "Arrive by flight/train to Jammu. From here, you will be transferred to the jetty around the Dal Lake where the houseboats are docked. After check-in and lunch at the houseboat, some time is offered to you for rest. The highlight of the first day of your Kashmir tour package is Shikara ride to the Nehru Park in the evening. Dinner and overnight stay will be in the houseboat in Srinagar.",
      },
      {
        day: 2,
        title: "SRINAGAR - SONAMARG - SRINAGAR",
        description:
          "After breakfast, proceed for a full-day excursion to Sonamarg - situated at an altitude of 9000 Ft. Sonamarg, also called 'Meadow of Gold', is located at 9000 ft. against snow-clad mountains, with the Sindh River rich in trout and mahseer flowing. Available on hire are ponies that can take you up to the Thajiwas Glacier, a major attraction especially during the summers. Return to Srinagar for overnight stay at the hotel.",
      },
      {
        day: 3,
        title: "SRINAGAR - GULMARG - SRINAGAR",
        description:
          "Enjoy a full-day trip to Gulmarg or the 'Meadow of Flowers', which is located at an altitude of 8700-ft. The place is known for its Ski Resort and the world's highest 18-hole Golf Course. You can also enjoy a Cable Car Ride or a Gondola ride. Return to Srinagar for dinner and stay overnight at the hotel.",
      },
      {
        day: 4,
        title: "SRINAGAR - PAHALGAM",
        description:
          "After breakfast, start your day tour to Pahalgam - 'Valley of Shepherds'. In Pahalgam, enjoy the nature & walk around the banks of River Lidder. Pahalgam is famous for some trekking routes and is the base camp for Amarnath Pilgrimage. Overnight stay at Pahalgam.",
      },
      {
        day: 5,
        title: "PAHALGAM - SRINAGAR",
        description:
          "After breakfast in the Pahalgam hotel, head to Srinagar for a city sightseeing tour. The Shankaracharya Temple and the Grand Mughal Gardens - Shalimar Bagh, Nishat Bagh, and Chashme Shahi - are the major tourist attractions in Srinagar. These tourist attractions are covered in this Kashmir family package. After the tour, you will be taken back to the hotel in the evening for dinner and overnight stay.",
      },
      {
        day: 6,
        title: "DEPARTURE",
        description:
          "After breakfast, check out and transfer to the Jammu railway station for onward destination.",
      },
    ],
  },
];
