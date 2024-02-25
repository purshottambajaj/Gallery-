import React from 'react'
import Card from './Card'

const Images = () => {
   

      const doctorImage=
      [
        {
          "doctor_image": "https://as2.ftcdn.net/v2/jpg/02/60/04/09/1000_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg",
          "doctor_name": "Dr. John Smith",
          "doctor_profession": "Cardiologist"
        },
        {
          "doctor_image": "https://t3.ftcdn.net/jpg/01/30/45/54/240_F_130455409_fTuinPO1LXECv5hlk9VBREnL6yowYUo3.jpg",
          "doctor_name": "Dr. Emily Johnson",
          "doctor_profession": "Pediatrician"
        },
        {
          "doctor_image": "https://t3.ftcdn.net/jpg/03/13/77/82/240_F_313778250_Y0o5can6MA490Nt7G6p03Zfu5fKmWCIv.jpg",
          "doctor_name": "Dr. Michael Lee",
          "doctor_profession": "Dermatologist"
        },
        {
          "doctor_image": "https://t4.ftcdn.net/jpg/02/20/30/45/240_F_220304581_3BRbk3UhoYrcVlt72fdBcVRHBtHAKuvD.jpg",
          "doctor_name": "Dr. Sarah Adams",
          "doctor_profession": "Oncologist"
        },
        {
          "doctor_image": "https://t3.ftcdn.net/jpg/03/05/69/00/240_F_305690038_kio1DI7qtf1kMPT4z6keI3GwB0zP6Sch.jpg",
          "doctor_name": "Dr. David Brown",
          "doctor_profession": "Neurologist"
        },
        {
          "doctor_image": "https://t3.ftcdn.net/jpg/00/79/71/30/240_F_79713072_dWCAZt6wPNFG5PqooCxAGsl4Mza7UfVy.jpg",
          "doctor_name": "Dr. Jennifer Martinez",
          "doctor_profession": "Gynecologist"
        },
        {
          "doctor_image": "https://t3.ftcdn.net/jpg/03/15/23/00/240_F_315230089_EaqZDrKcN8BkxjPMOzG1Io6Evx9ajzzn.jpg",
          "doctor_name": "Dr. Christopher Wilson",
          "doctor_profession": "Orthopedic Surgeon"
        },
        {
          "doctor_image": "https://t3.ftcdn.net/jpg/03/08/95/96/240_F_308959677_9dsUpeKnj2wWy42Vr8ofYNeKoazLXgSX.jpg",
          "doctor_name": "Dr. Laura Taylor",
          "doctor_profession": "Psychiatrist"
        },
        {
          "doctor_image": "https://t4.ftcdn.net/jpg/02/46/36/57/240_F_246365778_4X1uXrRyBoFq79wr3flAMv3GDGdSjA6e.jpg",
          "doctor_name": "Dr. Samantha Clark",
          "doctor_profession": "Endocrinologist"
        },
        {
          "doctor_image": "https://t4.ftcdn.net/jpg/02/65/13/75/240_F_265137512_Oh1Bwar4BE4N6nnsvgkIse8SMkYHSn1h.jpg",
          "doctor_name": "Dr. Daniel Garcia",
          "doctor_profession": "Urologist"
        },
        {
          "doctor_image": "https://t3.ftcdn.net/jpg/00/86/83/06/240_F_86830610_oeZJ0BG7scg8su2cUug3db6TMollVqtA.jpg",
          "doctor_name": "Dr. Jessica White",
          "doctor_profession": "Ophthalmologist"
        },
        {
          "doctor_image": "https://t3.ftcdn.net/jpg/01/50/17/76/240_F_150177678_tTiXG1WOwVinmD6IvpFfySqDKyNETyvD.jpg",
          "doctor_name": "Dr. Kevin Rodriguez",
          "doctor_profession": "Pulmonologist"
        },
        {
          "doctor_image": "https://t3.ftcdn.net/jpg/02/95/51/80/240_F_295518052_aO5d9CqRhPnjlNDTRDjKLZHNftqfsxzI.jpg",
          "doctor_name": "Dr. Amanda Green",
          "doctor_profession": "Rheumatologist"
        },
        {
          "doctor_image": "https://t3.ftcdn.net/jpg/01/94/52/52/240_F_194525205_HzyzPGx0tM7AKM4GnThXRHcanV4YRrgZ.jpg",
          "doctor_name": "Dr. Matthew Hall",
          "doctor_profession": "Gastroenterologist"
        },
        {
          "doctor_image": "https://t3.ftcdn.net/jpg/01/65/53/64/240_F_165536404_4TmYA6d4fmyYiHkY4s3aJKnkaz5453oz.jpg",
          "doctor_name": "Dr. Lisa Martinez",
          "doctor_profession": "Otolaryngologist"
        },
        {
          "doctor_image": "https://t4.ftcdn.net/jpg/04/91/21/73/240_F_491217325_2hVNMuu6xToWHcwoE6XT2MtwucLtkrKq.jpg",
          "doctor_name": "Dr. Kimberly Adams",
          "doctor_profession": "Allergist"
        },
        {
          "doctor_image": "https://t4.ftcdn.net/jpg/02/91/56/81/240_F_291568147_nMq52oFmK4Ulr5HSBOLsSxlHKtLRve3Z.jpg",
          "doctor_name": "Dr. Brian Walker",
          "doctor_profession": "General Surgeon"
        },
        {
          "doctor_image": "https://t4.ftcdn.net/jpg/03/20/74/45/240_F_320744517_TaGkT7aRlqqWdfGUuzRKDABtFEoN5CiO.jpg",
          "doctor_name": "Dr. Rebecca King",
          "doctor_profession": "Nephrologist"
        },
        {
          "doctor_image": "https://t4.ftcdn.net/jpg/02/71/27/05/240_F_271270515_h430bOQYBpPIXZXELDhk5GMjAabEGmAo.jpg",
          "doctor_name": "Dr. Eric Carter",
          "doctor_profession": "Anesthesiologist"
        },
        {
          "doctor_image": "https://t3.ftcdn.net/jpg/02/60/04/08/240_F_260040863_fYxB1SnrzgJ9AOkcT0hoe7IEFtsPiHAD.jpg",
          "doctor_name": "Dr. Megan Moore",
          "doctor_profession": "Hematologist"
        },
        {
          "doctor_image": "https://t4.ftcdn.net/jpg/03/05/41/27/240_F_305412791_XRNiWaFCREjLLpSQfj0e736foBoYXXYv.jpg",
          "doctor_name": "Dr. Nathan Thompson",
          "doctor_profession": "Radiologist"
        },
        {
          "doctor_image": "https://t4.ftcdn.net/jpg/02/76/94/29/240_F_276942923_vRe2zKQBgaQj0MyNOjqD8f7eVMyKZ2eL.jpg",
          "doctor_name": "Dr. Ashley Harris",
          "doctor_profession": "Oncology Surgeon"
        },
        {
          "doctor_image": "https://t3.ftcdn.net/jpg/06/23/41/02/240_F_623410285_jpj0VPzZoMV3v4KbH5SBgl9TWmyskfYK.jpg",
          "doctor_name": "Dr. Josephine Clark",
          "doctor_profession": "Geriatrician"
        },
        {
          "doctor_image": "https://t3.ftcdn.net/jpg/03/09/90/94/240_F_309909484_4I73ZFD6xhFrBCGj6xdiLAi1xJXFaNwV.jpg",
          "doctor_name": "Dr. Peter Roberts",
          "doctor_profession": "Plastic Surgeon"
        },
      ]

      
  return (
    <>
  <div className='flex flex-row justify-center py-10'>
  <h3 className='text-gray-500 font-bold text-2xl relative py-2'>
    Selected Doctor
    <div className='absolute 
    bottom-0 left-1/2 bg-teal-400 h-0.5 w-24 transform -translate-x-1/2'></div>
  </h3>
</div>
    <div className="flex justify-center items-center h-screen flex-wrap">
          {doctorImage.map((image) => (
           
             <Card {...image}  />
            
          ) )
          }
     </div>    
    </>
  )
}

export default Images