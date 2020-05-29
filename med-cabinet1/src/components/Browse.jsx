import React, { useState, useEffect } from 'react';
import MyPagination from "./Pagination"
import {
    Card, 
    // Collapse, 
    // CardText, 
    CardBody,
    CardTitle, 
    CardSubtitle, 
    Button,
    // Container,
    Carousel,
    CarouselItem,
    CarouselControl,
    // CarouselIndicators,
    // CarouselCaption
  } from 'reactstrap';

export default function Browse(props) {

    const {strainData} = props;

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [currentPageNum, setcurrentPageNum] = useState(1);

    let indexNum = currentPageNum - 1;

    const toggle = () => setIsOpen(!isOpen);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === strainPages[0].length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
      }
    
    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? strainPages[0].length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
      }
    
    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
      }


    const splitArray = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
        arr.slice(i * size, i * size + size)
    );

    const strainPages = splitArray(strainData, 20);

    const strainCards = strainPages[indexNum].map( (item, index) => {
        let medicalList = item.effects.medical.map( (item, index) => {
            return (<div key={index}>{item}</div>)
        })
        let negativeList = item.effects.negative.map( (item, index) => {
            return (<div key={index}>{item}</div>)
        })
        let positiveList = item.effects.positive.map( (item, index) => {
            return (<div key={index}>{item}</div>)
        })
        let flavorList = item.flavors.map( (item, index) => {
            return (<div key={index}>{item}</div>)
        })
        return (
            <CarouselItem
            className="strains"
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.id}
            >
                <Card>
                <CardBody>
                    <CardTitle>Name: {item.name}</CardTitle>
                    <CardSubtitle>Race: {item.race}</CardSubtitle>
                    <div key={item.id}>
                        <div className="strainEffect">
                            <div><h5>Used to treat the following medical conditions:</h5></div>
                            <div className="lists">{medicalList}</div>   
                        </div>            
                        <div className="strainEffect">
                            <div><h5>Reported negative side effects:</h5></div>
                            <div className="lists">{negativeList}</div>
                        </div>
                        <div className="strainEffect">
                            <div><h5>Reported positive side effects:</h5></div>
                            <div className="lists">{positiveList}</div>
                        </div>
                        <div className="strainEffect">
                            <div><h5>Associated flavor profiles:</h5></div>
                            <div className="lists">{flavorList}</div>
                        </div>
                        <div className="strainEffect">
                            <div><h5>Description:</h5></div>
                            <div className="lists">description here</div>
                        </div>
                    </div>
                    <Button>Favorite</Button>
                </CardBody>
                </Card>
            </CarouselItem>
        );
    });

    return (
        <div className="cara">
            <h2>Browse All Strains:</h2>
            <div><h6>(20 per page)</h6></div>
            <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            >
            {/* <CarouselIndicators items={strainPages} activeIndex={activeIndex} onClickHandler={goToIndex} /> */}
            {strainCards}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>
            <MyPagination
            currentPageNum={currentPageNum} 
            setcurrentPageNum={setcurrentPageNum}></MyPagination>
        </div>
    )
}