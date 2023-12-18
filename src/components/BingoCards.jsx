import React, { useState, useEffect } from 'react';
import { renderToString } from 'react-dom/server';
import html2canvas from "html2canvas";

import jsPDF from 'jspdf'


import { Popover, Modal } from "bootstrap";
//const pdf = new jsPDF("p", "mm", "a4");

//40

var cardGenSettings = {
    valueRange: [0, 75],
    letters: ["B", "I", "N", "G", "O"],
    rows: 5,
    centerVal: "FREE",
    cardLoadDelay: 200, // Delay between when each card is loaded for HTML2Canvas
    onePageCardGenMethod: false,

    cardsPerPage: 4,
    batchNum: 1,
    bingoTitle: 'Sample Bingo Event',
    cardFooterText: "Card#B[B]C[C]"
}

const numberPlaceholder = 'n';

var bingoCardData = [
    {
        "B": [numberPlaceholder, numberPlaceholder, numberPlaceholder, numberPlaceholder, numberPlaceholder],
        "I": [numberPlaceholder, numberPlaceholder, numberPlaceholder, numberPlaceholder, numberPlaceholder],
        "N": [numberPlaceholder, numberPlaceholder, 'FREE', numberPlaceholder, numberPlaceholder],
        "G": [numberPlaceholder, numberPlaceholder, numberPlaceholder, numberPlaceholder, numberPlaceholder],
        "O": [numberPlaceholder, numberPlaceholder, numberPlaceholder, numberPlaceholder, numberPlaceholder],

    }
]

function BingoCards(props) {
    return (<CardGenSettings />)
}


// const PDFPage2 = () => (
//     <div>
//         <h3>Time & Materials Statement of Work!!!!!!!!!!!!! (SOW) </h3>
//         <h4>General Information</h4>
//         <table id="tab_customers" className="table table-striped" >
//             <colgroup>
//                 <col span="1" />
//                 <col span="1" />
//             </colgroup>
//             <thead>
//                 <tr className="warning">
//                     <th>SOW Creation Date</th>
//                     <th>SOW Start Date</th>
//                     <th>Project</th>
//                     <th>Last Updated</th>
//                     <th>SOW End Date</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 <tr>
//                     <td>Dec 13, 2017</td>
//                     <td>Jan 1, 2018</td>
//                     <td>NM Connect - NMETNMCM</td>
//                     <td>Dec 13, 2017</td>
//                     <td>Dec 31, 2018</td>
//                 </tr>
//             </tbody>
//         </table>

//     </div>
// );




const PDFPage = () => (
    <div>
        testData
    </div>
);

let pdf = new jsPDF('p', 'px', 'a4');
pdf.deletePage(1);

function generatePdf() {

    var target = document.getElementById('PDFTarget');

    // const printfromRenderedString = async () => {
    //     const string = renderToString(<>
    //         <PDFPage />

    //     </>);

    //     console.log("test: ", string)


    //     const opt = {
    //         callback: function (pdf) {
    //             pdf.save("Test.pdf");
    //             // to open the generated PDF in browser window
    //             // window.open(jsPdf.output('bloburl'));
    //         },
    //         margin: [10, 10, 0, 10],
    //         autoPaging: 'text',
    //         html2canvas: {
    //             allowTaint: true,
    //             dpi: 300,
    //             letterRendering: true,
    //             logging: false,
    //             scale: 1
    //         }
    //     };
    //     pdf.html(string, opt);


    //     // pdf.html(string).then(() => pdf.save('test.pdf'))


    //     console.log("test: ", pdf)

    //     // pdf.save("pdf");
    // };
    //printfromRenderedString();


    function printWithHTML2Canvas() {
        //var target = document.getElementById('PDFTarget');//document.body

        // const renderedString = renderToString(<>
        //     <CardPage cardIDs={[1, 2, 3, 4]} />
        // </>);

        // pdf.html(renderedString).then(() => pdf.save('test.pdf'))

        html2canvas(target, {
            useCORS: true,
            allowTaint: true
            //dpi: 1600
            // letterRendering: true,
            // logging: false,
            // scale: 1

        }).then(function (canvas) {
            //canvas.width = target.clientWidth;
            //var jpegUrl = canvas.toDataURL("image/jpeg");

            var imgData = canvas.toDataURL("image/png");

            //     console.log("here!!!!!")
            //     var width = canvas.width;
            //     var height = canvas.height;

            //     console.log("here!!!!!")

            //     var millimeters = {};
            //     millimeters.width = Math.floor(width * 0.264583);
            //     millimeters.height = Math.floor(height * 0.264583);
            //     console.log("here!!!!!")


            //    /// var pdf = new jsPDF("p", "mm", "a4");
            //     pdf.deletePage(1);
            //     pdf.addPage(millimeters.width, millimeters.height);
            //     pdf.addImage(imgData, 'PNG', 0, 0);

            //     console.log("here!!!!!")

            //     pdf.save('WebSiteScreen.pdf');
            //     console.log("here!!!!!")


            // var width =  80/100 * pdf.internal.pageSize.getWidth();
            // var height =  80/100 * pdf.internal.pageSize.getHeight();
            console.log("Adding page")
            pdf.addPage("a4", "p");

            var pageWidth = pdf.internal.pageSize.getWidth();
            var pageHeight = pdf.internal.pageSize.getHeight();

            const widthRatio = pageWidth / canvas.width;
            const heightRatio = pageHeight / canvas.height;
            const ratio = widthRatio > heightRatio ? heightRatio : widthRatio;
            //https://stackoverflow.com/questions/60953089/how-to-fit-an-image-in-the-center-of-a-page-using-jspdf
            const canvasWidth = canvas.width * ratio;
            const canvasHeight = canvas.height * ratio;


            const marginX = (pageWidth - canvasWidth) / 2;
            const marginY = (pageHeight - canvasHeight) / 2;

            //const marginX = 50
            // const marginY = 100

            // console.log("Mrginx Test: ", pageWidth, canvasWidth, marginX)
            // console.log("Mrginx Test: ", pageWidth, canvasWidth, marginX)



            //  pdf.addImage(imgData, 'PNG', 0, 0, width, height);
            pdf.addImage(imgData, 'PNG', marginX, marginY, canvasWidth, canvasHeight);


            // pdf.save('download.pdf',opt);

            //     console.log("jpegUrl: ",jpegUrl)
            //    // pdf.addImage(jpegUrl, 'JPEG', 10, 10,180, 150 );

            //     console.log("pdf: ",pdf);

            //     pdf.save('sample-file.pdf');


            //jpegUrl.length.




            /* pdf.addImage(jpegUrl, 'JPEG', 10, 10);
             pdf.save('sample-file.pdf');*/
        });
    }


    if (!cardGenSettings.onePageCardGenMethod) {
        var targetArr = document.querySelectorAll("#PDFTarget")

        targetArr.forEach(element => {
            target = element
            printWithHTML2Canvas();
        });
        try {
            document.getElementById("savePDFBtn").style.visibility = "visible";
        } catch {

        }
    } else {
        printWithHTML2Canvas();

    }



    const printfromRenderedDom = () => {
        let jsPdf = new jsPDF('p', 'pt', 'letter');
        var htmlElement = document.getElementById('PDFTarget');
        // you need to load html2canvas (and dompurify if you pass a string to html)
        const opt = {
            callback: function (jsPdf) {
                jsPdf.save("Test.pdf");
                // to open the generated PDF in browser window
                // window.open(jsPdf.output('bloburl'));
            },
            margin: [0, 50, 0, 50],
            autoPaging: 'text',
            html2canvas: {
                allowTaint: true,
                dpi: 300,
                letterRendering: true,
                logging: false,
                scale: 1
            }
        };
        console.log("test!!!", htmlElement);
        jsPdf.html(htmlElement, opt);
    }
}
var showSavePDFBtn = false;



function CardGenSettings() {
    const [disableInputs, setdisableInputs] = useState(false);


    const [cardsGen, setcardsGen] = useState(false);
    const [cardIdarray, setCardIdarray] = useState([]);

    const [settings, setSettings] = useState({
        batchNum: cardGenSettings.batchNum,
        cardFooterText: cardGenSettings.cardFooterText,
        cardAmt: 4,
        cardsPerPage: cardGenSettings.cardsPerPage
    });



    const [cardsAmt, setCardsAmt] = useState('4');
    const [batchNum, setbatchNum] = useState('1');

    //const [cardsPerPage, setcardsPerPage] = useState(1);


    var cardsPerPage = cardGenSettings.cardsPerPage;

    async function PrepJSPDF(params) {
        if (cardsGen) {
            var c = 1;
            var x = Math.floor(bingoCardData.length / cardsPerPage)// + ();
            var y = bingoCardData.length % cardsPerPage;
            function setarrayOfCardID(_tempCardIdarray, timer) {
                setTimeout(async () => {
                    console.log(timer, "setCardIdarray ", _tempCardIdarray)
                    setCardIdarray(_tempCardIdarray);
                    showSavePDFBtn = true;
                }, timer);
            }
            var timer = 1000
            for (let pageNum = 1; pageNum <= x; pageNum++) {
                var tempCardIdarray = [];
                // console.log("pageNum: ", pageNum);
                for (let c = (pageNum - 1) * cardsPerPage; c < (pageNum) * cardsPerPage; c++) {
                    tempCardIdarray.push(c);
                }
                setarrayOfCardID(tempCardIdarray, timer);
                timer += cardGenSettings.cardLoadDelay;
                console.log(pageNum, "val: ", tempCardIdarray);
            }
        }
    }


    function beginCardGen() {
        setdisableInputs(true);
        const cardAmt = parseInt(document.getElementById("npt_Amt").value);
        const batchNum = parseInt(document.getElementById("npt_BatchNum").value);
        const cardsPerPage = parseInt(document.getElementById("cardsPerPageV2").value);




        // cardsPerPage = document.getElementsByName("cardsPerPAge")
        //var cardsPerPAge;
        for (var radio of document.getElementsByName("cardsPerPAge")) {
            if (radio.checked) {
                //setcardsPerPage(radio.value);
                cardGenSettings.cardsPerPage = parseInt(radio.value);
            }
        }

        console.log(cardAmt, cardsPerPage);

        cardGenSettings.cardsPerPage = cardsPerPage;

        // cardsPerPage = cardGenSettings.cardsPerPage;
        if (/^\d+$/.test(cardAmt) && typeof (cardsPerPage) == 'number'
            && /^\d+$/.test(cardsPerPage) && /^\d+$/.test(batchNum)

        ) {
            // cardGenSettings.batchNum = parseInt(batchNum);
            //setcardsGen(generateCardData(Number(cardAmt), Number(cardsPerPage)));
            // alert('Beginning Card Generation", "Amount of Cards" and "Cards Per Page"');

            var myModal = new Modal(document.getElementById('mainModal'));
            myModal.show();

            var myModalEl = document.getElementById('myModal')
            // myModalEl.addEventListener('hidden.bs.modal', function (event) {
            
            // })


            // setcardsGen(generateCardData(cardAmt, cardsPerPage));
        } else {
            console.error("Invalid value type for 'cardsPerPage' or 'cardAmt'");
            alert('Please provide information for the "Batch Number", "Amount of Cards" and "Cards Per Page"');
            setdisableInputs(false);

        }

        //console.log("test", /^\d+$/.test(cardAmt))


    };
    useEffect(() => {
        cardGenSettings.cardFooterText = settings.cardFooterText;
        cardGenSettings.batchNum = settings.batchNum;//
        try {
            // parseInt(document.getElementById("npt_BatchNum").value);

        } catch (error) {

        }
        // document.getElementById('npt_CardCode1').value = cardGenSettings.cardFooterText;
        console.log(settings);

    }, [settings]);

    useEffect(() => {
        // document.querySelectorAll('[disabled]');
        Array.prototype.slice.call(document.getElementsByTagName('input')).forEach(element => {
            if (disableInputs) {
                element.setAttribute("disabled", "");
            } else {
                element.removeAttribute("disabled");
            }

        });
        Array.prototype.slice.call(document.getElementsByTagName('select')).forEach(element => {
            if (disableInputs) {
                element.setAttribute("disabled", "");
            } else {
                element.removeAttribute("disabled");
            }

        });



    }, [disableInputs]);
    useEffect(() => {

        var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
        var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
            return new Popover(popoverTriggerEl)
        })
    }, []);
    useEffect(() => {

        if (cardsGen && !cardGenSettings.onePageCardGenMethod) {
            // printTest()

            // pdf.save('download.pdf',opt);

            generatePdf();
        }
    }, [cardsGen]);

    useEffect(() => {
        if (cardsGen && cardIdarray.length >= 1) {
            // printTest()

            // pdf.save('download.pdf',opt);

            generatePdf();
        }



    }, [cardIdarray]);


    if (cardsGen && cardIdarray.length < 1 && cardGenSettings.onePageCardGenMethod) {
        PrepJSPDF();
    }
    if (cardIdarray.length >= 1 && cardGenSettings.onePageCardGenMethod) {
        return (<CardPage cardIDs={cardIdarray} />);
    }

    if (cardsGen && !cardGenSettings.onePageCardGenMethod) {
        return (<CardPage cardIDs={[0]} fullCardIDs={bingoCardData} />);
    }

    //const mountNode =  contentRef?.contentWindow?.document?.body

    function enforceFieldLimit(e) {
        // this.value.slice(0, 3)
        const element = e.target
        var elementValue = element.value;
        // console.log(elemenValue, elemenValue > parseInt(elementMax), elementMax);
        console.log(element.value);
        if (element.getAttribute("data-keepValues") !== null && false) {
            //Disabled
            element.getAttribute("data-keepValues").split(';').forEach(element2 => {
                if (!elementValue.includes(element2)) {

                    if (element.maxLength > 0) {
                        elementValue = elementValue.slice(0, element.maxLength - 4)
                    }
                    elementValue = elementValue + element2
                    element.value = elementValue;
                }

            });

        }

        if (element.maxLength > 0) {
            element.value = elementValue.slice(0, element.maxLength)
        }





        var elementValue = parseInt(element.value);
        const elementMax = parseInt(element.max)
        const elementMin = parseInt(element.min)

        if (elementMax > 0 && elementValue > parseInt(elementMax)) {
            element.value = elementMax;
        }
        if (elementMin > 0 && elementValue < elementMin) {
            element.value = elementMin;
        }


        setSettings({
            ...settings,
            cardFooterText: document.getElementById("npt_CardCode1").value,
            batchNum: document.getElementById("npt_BatchNum").value,
            cardAmt: document.getElementById("npt_Amt").value,
            cardsPerPage: document.getElementById("cardsPerPageV2").value
        });

    }


    return (
        <div className="container">
            <div class="modal fade" id="mainModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog ">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Proceed with Generation?</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p style={{ fontSize: "16px" }}> Are you sure you want to generate the Bingo cards? With the settings specified, <b>{settings.cardAmt}</b> Bingo cards will be generated with <b>{settings.cardsPerPage}</b> on each page, where possible with the
                                Card Code format <b>{settings.cardFooterText}</b>. Each page will also have <b>{cardGenSettings.bingoTitle}</b> as the title. <br /><br /> This action will create a PDF file which may take a few moments. Please confirm to proceed.
                            </p> </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={()=> setdisableInputs(false)}>Cancel</button>
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal"
                                onClick={() => { setcardsGen(generateCardData(parseInt(settings.cardAmt), parseInt(settings.cardsPerPage))) }}>
                                Confirm</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row d-flex justify-content-center pb-5">
                <div className="col-4">
                    <h1 for="basic-url" className="form-label">Bingo PDF Generator</h1>
                </div>
            </div>

            <div className="row d-flex justify-content-center pb-4">
                <div className=" col-sm-6 d-flex justify-content-center">
                    <GetBCard index={0} cardIds={[0]} cardFooterText={settings.cardFooterText} />
                </div>
                <div className=" col-sm-6 d-flex justify-content-center align-items-center  g-4">
                    <div className="">
                        <div className="row d-flex justify-content-center align-items-center">
                            {/* <div className="col-4"></div> */}
                            <div className="col-12">

                                <div className="input-group mb-3">
                                    <label className="input-group-text mw-auto" for="npt_Title" id="lbl_Title" >
                                        <i className="bi bi-info-circle-fill" data-bs-container="body"
                                            // title="Popover title" 
                                            data-bs-content="Please enter the title to be shown at the top of the page. (Max:_40_Characters)."
                                            data-bs-trigger="hover focus" data-bs-toggle="popover" data-bs-placement="top" > &nbsp;  </i>

                                        Bingo Title: </label>

                                    <input type="text" disabled className="form-control" id="npt_Title" defaultValue={cardGenSettings.bingoTitle}
                                        onInput={(e) => { enforceFieldLimit(e); cardGenSettings.bingoTitle = e.target.value }} maxLength="40"
                                        aria-describedby="basic-addon3" />
                                </div>
                            </div>

                        </div>


                        <div className="row d-flex justify-content-center">
                            {/* <div className="col-4"></div> */}
                            <div className="col-12">

                                <div className="input-group mb-3">
                                    <label className="input-group-text mw-auto" for="npt_Amt" id="lbl_Amt" >
                                        <i className="bi bi-info-circle-fill" data-bs-container="body"
                                            // title="Popover title" 
                                            data-bs-content="Please enter the amount of cards to be generated, within the range of 1-60."
                                            data-bs-trigger="hover focus" data-bs-toggle="popover" data-bs-placement="top" > &nbsp;  </i>

                                        Amount of Cards: </label>

                                    <input type="number" className="form-control" id="npt_Amt" defaultValue={4}
                                        onInput={(e) => enforceFieldLimit(e)} min="1" max="60"

                                        aria-describedby="basic-addon3" />
                                </div>
                            </div>

                        </div>

                        <div className="row d-flex justify-content-center">
                            <div className="col-12" >

                                <div className="input-group mb-3">
                                    <label className="input-group-text" for="cardsPerPageV2" id="lbl_AmtPerPAge">
                                        <i className="bi bi-info-circle-fill" data-bs-container="body"
                                            // title="Popover title" 
                                            data-bs-content="Please specify how many cards to be generated per page. Results on the last page may vary depending on the amount of cards."
                                            data-bs-trigger="hover focus" data-bs-toggle="popover" data-bs-placement="top" > &nbsp;  </i>
                                        Cards Per Page: </label>
                                    <select className="form-select" id="cardsPerPageV2" onInput={(e) => { enforceFieldLimit(e) }}>
                                        <option value="1">One (1)</option>
                                        <option value="2">Two (2)</option>
                                        <option value="3">Three (3)</option>
                                        <option value="4" selected>four (4)</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* <div className="row d-flex justify-content-center">
                        <div className="col-12" >
                            <div className="input-group mb-3">
                                <label className="input-group-text" for="cardsPerPAge1" id="lbl_AmtPerPAge">Cards Per Page: </label>
                                <div className="input-group-text">
                                  
                                    <input name="cardsPerPAge" id="cardsPerPAge1" className="form-check-input mt-0" type="radio" value="1" aria-label="Checkbox for following text input" />
                                </div>

                                <div className="input-group-text">
                                    <input name="cardsPerPAge" id="cardsPerPAge2" className="form-check-input mt-0" type="radio" value="2" aria-label="Checkbox for following text input" />
                                </div>

                                <div className="input-group-text">
                                    <input name="cardsPerPAge" id="cardsPerPAge3" className="form-check-input mt-0" type="radio" value="3" aria-label="Checkbox for following text input" />
                                </div>

                                <div className="input-group-text">
                                    <input name="cardsPerPAge" id="cardsPerPAge4" defaultChecked className="form-check-input mt-0" type="radio" value="4" aria-label="Checkbox for following text input" />
                                </div>
                            </div>
                        </div>
                    </div> */}
                        <div className="row d-flex justify-content-center">
                            <div className="col-12">
                                <div className="input-group mb-3">
                                    <label className="input-group-text" for="npt_BatchNum" id="lbl_BatchNum">
                                        <i className="bi bi-info-circle-fill" data-bs-container="body"
                                            // title="Popover title" 
                                            data-bs-content="Please provide a batch number if the cards are being generated in batches."
                                            data-bs-trigger="hover focus" data-bs-toggle="popover" data-bs-placement="top" > &nbsp;  </i>
                                        Batch Number: </label>
                                    <input type="number" className="form-control" id="npt_BatchNum" defaultValue="1" aria-describedby="basic-addon3" onInput={(e) => { enforceFieldLimit(e) }} min="0" max="100" />

                                </div>

                            </div>

                        </div>
                        <div className="row d-flex justify-content-center">
                            <div className="col-12">
                                <div className="input-group mb-3">
                                    <label className="input-group-text" for="npt_CardCode1" id="lbl_CardCode1">
                                        <i className="bi bi-info-circle-fill" data-bs-container="body"
                                            // title="Popover title" 
                                            data-bs-content="Please specify the format for the Card Code. ([B] is the placeholder for Batch Number and [C] is placeholder for the Card Number. If they are not supplied, the values are supplied automatically at the end. (Max:_30_Characters))"
                                            data-bs-trigger="hover focus" data-bs-toggle="popover" data-bs-placement="top" > &nbsp;  </i>
                                        Card Code: </label>
                                    <input id="npt_CardCode1" type="text" className="form-control" data-keepValues="[B];[C]" defaultValue={settings.cardFooterText} aria-describedby="basic-addon3" onInput={(e) => { enforceFieldLimit(e) }} onBlur={(e) => enforceFieldLimit(e)} maxLength={30}
                                    // onChange={e=>setCardFooterText(e.target.value)} 
                                    />

                                </div>

                            </div>

                        </div>

                        <div className="row d-flex justify-content-center">
                            <div className="col-4">
                                <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={() => beginCardGen()}>Generate</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    );


}


function generateCardData(cardAmt, cardsPerPAge) {
    if (!(typeof (cardAmt) == "number" && typeof (cardsPerPAge) == "number")) {
        console.error("Type mismatch in generateCardData()!");
        return false;
    }

    function generateNumber(letter, row) {
        var returnval;

        switch (letter) {
            case "B":
                returnval = Math.floor(Math.random() * (15 - 1)) + 1;
                break;
            case "I":
                returnval = Math.floor(Math.random() * (30 - 16)) + 16;

                break;
            case "N":
                returnval = Math.floor(Math.random() * (45 - 31)) + 31;

                break;
            case "G":
                returnval = Math.floor(Math.random() * (60 - 46)) + 46;

                break;
            case "O":
                returnval = Math.floor(Math.random() * (75 - 61)) + 61;

                break;

            default:
                returnval = "N/A" //testing
                break;
        }
        return returnval;

    }

    bingoCardData = []; //Clear array


    for (let x = 0; x < cardAmt; x++) {
        var tempbingoCardData = {};
        var valid = false;
        var tempNum;
        var safecount;
        cardGenSettings.letters.forEach((letter, index) => {
            tempbingoCardData[letter] = [];

            for (let c = 0; c < cardGenSettings.rows; c++) {
                tempNum = 0;
                safecount = 0;
                valid = false;

                if (letter == 'N' && c == 2) {
                    tempbingoCardData[letter].push(cardGenSettings.centerVal);


                } else {
                    while (!valid) {
                        tempNum = generateNumber(letter, c);

                        valid = !tempbingoCardData[letter].includes(tempNum);

                    }

                    tempbingoCardData[letter].push(tempNum);
                }


            }
        });
        // for (let c = 0; c < cardFormat.rows; c++) {
        //     tempbingoCardData.forEach((letter, index) => {
        //         tempbingoCardData[letter].push(generateNumber(letter, c));


        //     });

        // }

        bingoCardData.push(tempbingoCardData)
    }

    console.log("Cards Generated ", bingoCardData);
    return true;
}



// const print = async () => {
//     const string = renderToString(<>
//         <PDFPage />
//         <div>testing</div>
//     </>);

//     console.log("test: ", string)
//     pdf.html(string).then(() => pdf.save('test.pdf'))


//     console.log("test: ", pdf)

//     // pdf.save("pdf");
// };
















function GetCardPage(props) {

    const cardIds = props.cardIds;
    var pageNum = (cardIds[0] / cardGenSettings.cardsPerPage) + 1;

    try {


        // document.getElementsByClassName('container')[0].classList.add("width: 8.5in !important")
    } catch (error) {

    }
    return (
        <div className="page row pb-3 pt-3 justify-content-center" >

            <div id="PDFTarget" className="col-12 col-md-8">
                <div className="row " >
                    <div className="col-1"></div>
                    <div className="col">
                        <h3><b>{cardGenSettings.bingoTitle}</b> </h3>
                        <h4><b></b> </h4>
                    </div>
                    <div className="col1"></div>
                </div>
                <div style={{ border: "1px solid black" }} className="row row-cols-1 row-cols-md-2 g-2 mb-2 mt-4 p-1 justify-content-center" >
                    <GetBCard index={0} cardIds={cardIds} />
                    <GetBCard index={1} cardIds={cardIds} />
                    <GetBCard index={2} cardIds={cardIds} />
                    <GetBCard index={3} cardIds={cardIds} />
                </div>
                <div className="row " >
                    <div className="col-5"></div>
                    <div className="col-2">
                        {/* {pageNum} */}
                    </div>
                    <div className="col-5"></div>
                </div>
            </div>

        </div>)
};


function GetBCard(props) {
    var index = props.index;
    const cardIds = props.cardIds;
    if ('cardFooterText' in props) {
        cardGenSettings.cardFooterText = props.cardFooterText;
    }


    if (!cardGenSettings.cardFooterText.includes('[B]')) {
        cardGenSettings.cardFooterText = cardGenSettings.cardFooterText + 'B[B]'
    }
    if (!cardGenSettings.cardFooterText.includes('[C]')) {
        cardGenSettings.cardFooterText = cardGenSettings.cardFooterText + 'C[C]'
    }


    const CardID = cardGenSettings.cardFooterText.replace('[B]', cardGenSettings.batchNum).replace('[C]', cardIds[index] + 1)




    var cardFooter = (
        <div className="card-footer text-mute" style={{ fontSize: "70%" }}>
            {/* {`NWRFDBCard #B${cardGenSettings.batchNum}C${cardIds[index] + 1}`} */}
            {CardID}
        </div>)


    if (cardGenSettings.cardsPerPage == 1 || bingoCardData[cardIds[0]]["B"][0] == numberPlaceholder) {
        return (
            <div className="col-12" >
                <div className="card" style={{ border: '1px solid black' }}>
                    {/* <img src="..." className="card-img-top" alt="..." /> */}
                    <div className="card-body">
                        <GetCard index={cardIds[0]} />
                    </div>
                    {cardFooter}
                </div>
            </div>);
    }
    return (<> {cardIds.length >= (index + 1) ?
        <div className="col-6">
            <div className="card" style={{ border: '1px solid black' }}>
                {/* <img src="..." className="card-img-top" alt="..." /> */}
                <div className="card-body">
                    <GetCard index={cardIds[index]} />
                </div>
                {cardFooter}

            </div>
        </div>
        :
        <div className="col-6" style={{ visibility: "hidden", border: '1px solid black' }}>
            <div className="card">
                {/* <img src="..." className="card-img-top" alt="..." /> */}
                <div className="card-body">
                    <GetCard index={cardIds[0]} />
                </div>
                {cardFooter}

            </div>
        </div>
    }  </>);

}















function CardPage(props) {
    var cardIds = props.cardIDs;
    var fullCardIDs = props.fullCardIDs;
    var pageArray = []
    //(pageNum - 1) * cardsPerPage = x;
    var pageNum = (cardIds[0] / cardGenSettings.cardsPerPage) + 1;

    var now = new Date().toLocaleString().replace(",", "").replace(/:.. /, " ").replace(":", ".").replace("/", ".");

    function printPDF() {
        // generatePdf();

        //BingoCards 4_20_2023 7_41 PM.pdf

        //now.f
        // now.format("dd/MM/yyyy hh:mm TT");

        pdf.save(`BingoCards ${now}.pdf`);
    }
    // print();

    var cardW = "25px";

    var cardPadding = "5%"//, 0%, 10%, 60%";




    useEffect(() => {

        if (showSavePDFBtn) {
            document.getElementById("savePDFBtn").style.visibility = "visible";
        } else {
            document.getElementById("savePDFBtn").style.visibility = "hidden";
        }

    }, []);


    if (!cardGenSettings.onePageCardGenMethod) {

        var cardsPerPage = cardGenSettings.cardsPerPage;
        var x = Math.floor(bingoCardData.length / cardsPerPage)// + ();
        var y = bingoCardData.length % cardsPerPage;

        for (let pageNum = 1; pageNum <= x; pageNum++) {
            var tempCardIdarray = [];
            // console.log("pageNum: ", pageNum);
            for (let c = (pageNum - 1) * cardsPerPage; c < (pageNum) * cardsPerPage; c++) {
                tempCardIdarray.push(c)
            }
            pageArray.push(tempCardIdarray)
            //setarrayOfCardID(tempCardIdarray, timer);

            // console.log(pageNum, "val: ", tempCardIdarray);
        }

        // console.log("Page Array1: ", pageArray);


        var tempCardIdarray = [];
        // console.log("pageNum: ", pageNum);
        if (y > 0) {


            for (let c = bingoCardData.length - y; c < bingoCardData.length; c++) {
                tempCardIdarray.push(c)
            }

            pageArray.push(tempCardIdarray)
            console.log("Page Array2: ", pageArray);

        }
        //setarrayOfCardID(tempCardIdarray, timer);

        console.log(pageNum, "val: ", tempCardIdarray);


        return (<>
            <div className="container" style={{ minWidth: "8.5in" }}>
                <div className="row">
                    <div className="col-4">                    </div>
                    <div className="col-4"><button id="savePDFBtn" type="button" className="btn btn-primary" onClick={() => printPDF()}>Save PDF</button></div>
                </div>

                {pageArray.map((element, index) => (

                    <GetCardPage key={index} cardIds={element} />


                ))}



            </div>


        </>);

    };



    return (<>
        {/* <div className="container-fluid vh-100 d-flex justify-content-center align-content-center flex-wrap " style={{ border: "1px solid blue" }}> */}
        <div className="container" style={{ border: "1px solid blue" }}>

            {/* <div className="row d-flex  justify-content-center" style={{ width: cardW, border: "1px solid red" }}>
                <div className="col-4"></div>
                <div className="col-4"></div>
            </div> */}

            <div className="row">
                <div className="col-4">

                </div>
                <div className="col-4"><button id="savePDFBtn" type="button" className="btn btn-primary" onClick={() => printPDF()}>Save PDF</button></div>
            </div>
            <getCardPage />
        </div>
    </>)

}

function GetCard(props) {
    var cardId = props.index

    // console.log("her", props)
    return (

        <table className="table table-bordered border-dark" style={{ marginBottom: "0" }}>
            <thead>
                <tr>
                    <th scope="col">{cardGenSettings.letters[0]}</th>
                    <th scope="col">{cardGenSettings.letters[1]}</th>
                    <th scope="col">{cardGenSettings.letters[2]}</th>
                    <th scope="col">{cardGenSettings.letters[3]}</th>
                    <th scope="col">{cardGenSettings.letters[4]}</th>
                </tr>
            </thead>
            <tbody>



                {
                    Object.keys(bingoCardData[cardId]).map((letter, letterIndex) => (
                        <tr>
                            <td>{bingoCardData[cardId]["B"][letterIndex]}</td>
                            <td>{bingoCardData[cardId]["I"][letterIndex]}</td>

                            {bingoCardData[cardId]["N"][letterIndex] == cardGenSettings.centerVal ?
                                <td style={{ fontSize: "60%", justifyContent: "center" }}>{bingoCardData[cardId]["N"][letterIndex]}</td>
                                :
                                <td>{bingoCardData[cardId]["N"][letterIndex]}</td>
                            }
                            <td>{bingoCardData[cardId]["G"][letterIndex]}</td>
                            <td>{bingoCardData[cardId]["O"][letterIndex]}</td>

                        </tr>

                    ))}
            </tbody>
        </table>
    )

}






export default BingoCards;