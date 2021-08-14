import React, { createRef, useState } from "react";
import db from "./script"

function FormBody() {
    const [Dets, setName] = useState({
        Name: "",
        Working: "",
        Education: "",
        EducationalLife: "",
        Description: "",
        Career: "",
        Aboutu: "",
        connum: "",
        conmail: "",

    })
    const formy= React.createRef()
    // var urls = []
    // var url1 = []
    // var url2 = []
    // var url3 = []
    // var url4 = []
    // var ImgName, ImgUrl
    var reader;
   var files=[];
   var files2=[];
   var files3=[];
   var files4=[];
    var nmy;
    var lim = 0;
    var lim1 = 0;
    var lim2 = 0;
    var lim3 = 0;
    var lim4 = 0;
    var myImages = [];
    var rem = []
    var rem2 = []
    var rem3 = []
    var rem4 = []
    var l = 1;

   var mainfilli = [];
    var filli = []
    var filli2 = []
    var filli3 = []
    var filli4 = []
    const handleInput = (e) => {
        const name = e.target.name
        const value = e.target.value;
        // console.log(name, value)
        setName({ ...Dets, [name]: value })
    }

    const SubmitEvent=(e)=>{
        e.preventDefault()
        // const fun = (MainRef, filmg, numy) => {
        //     MainRef.put(filmg).then((snapshot) => {
        //         snapshot.ref.getDownloadURL().then((downloadurl) => {
        //             // console.log(numy)
        //             db.collection("DocDets").doc(nmy).set({ [numy]: downloadurl }, { merge: true })
        //             // console.log(url)
        //         })
        //     });
        // }
        nmy = formy.current.connum.value;
// console.log(nmy)
        db.collection("DocDets").doc(nmy).set({

            Name:formy.current.Name.value,
            Department: formy.current.Department.value,
            Working: formy.current.Working.value,
            EducationalLife: formy.current.EducationalLife.value,
            Education: formy.current.Education.value,
            Career: formy.current.Career.value,
            Awards: formy.current.Awards.value,
            Aboutu: formy.current.Aboutu.value,
            Phoneno: formy.current.connum.value,
            Email: formy.current.conmail.value,
            Hospital_Address: formy.current.conhosad.value,
            Permanent_Address: formy.current.conpermad.value

        },{ merge: true })
        .then(() => {
            const dat=[]
            // dat.push({Name:form.Name.value,Department:form.Department.value,Number:form.connum.value,Email:form.conmail.value,Education: form.Education.value,Phoneno: form.connum.value,Hospital_Address: form.conhosad.value})
            db.collection("DocDept").doc(formy.current.Department.value).collection("proDoc").doc(formy.current.connum.value).set({Name:formy.current.Name.value,Department:formy.current.Department.value,Number:formy.current.connum.value,Email:formy.current.conmail.value,Education: formy.current.Education.value,Phoneno: formy.current.connum.value,Hospital_Address: formy.current.conhosad.value},{merge:true})
                .then(() => {

                    formy.current.Name.value = ""
                    formy.current.EducationalLife.value = ""
                    formy.current.Working.value = ""
                    formy.current.Career.value = ""
                    formy.current.Description.value = ""
                    formy.current.Awards.value = ""
                    formy.current.Aboutu.value = ""
                    formy.current.Awards.value = ""
                    formy.current.connum.value = ""
                    formy.current.conmail.value = ""
                    formy.current.conpermad.value = ""
                    formy.current.conhosad.value = ""
                    formy.current.Education.value = ""

                    // l = 1;
                    // // To be uncommented
                    // rem.forEach((a) => {
                    //     $(`#${a}`).val(null);
                    //     $(`#output${l}`).attr("src", "");
                    //     l = l + 1;
                    // })
                    // resu()
                    // const remvo = () => {
                    //     document.getElementById("ari").value = null;
                    //     document.getElementById("ari2").value = null;
                    //     document.getElementById("ari3").value = null;
                    //     document.getElementById("ari4").value = null;
                    //     for (var k = 0; k < 6; k++) {
                    //         $(`#output0${k}`).attr("src", "");
                    //         $(`#output1${k}`).attr("src", "");
                    //         $(`#output2${k}`).attr("src", "");
                    //         $(`#output3${k}`).attr("src", "");
                    //     }
                    // }
                    // remvo()
                   
                    alert("Succesfully Submitted")
                    // location.href = "./Thank.html";
                })
        })
        // alert("Succesfully submitted!");
        .catch((error) => {
            console.error("Error writing document: ", error);
        });

    }
    function redrawImages4() {
        filli3.forEach((imageBlob, index) => {
            if (index <= 5) {
                const ide = `output2${index}`
                //   const iden=`output${index}`
                //   console.log(ide)
                document.getElementById(ide).setAttribute("src", URL.createObjectURL(imageBlob))
                //   document.getElementById(iden).setAttribute("src",URL.createObjectURL(imageBlob))
            }
        });
    }
    function redrawImages3() {
        filli2.forEach((imageBlob, index) => {
            if (index <= 5) {
                const ide = `output1${index}`
                //   const iden=`output${index}`
                //   console.log(ide)
                document.getElementById(ide).setAttribute("src", URL.createObjectURL(imageBlob))
                //   document.getElementById(iden).setAttribute("src",URL.createObjectURL(imageBlob))
            }
        });
    }
    function redrawImages2() {
        filli.forEach((imageBlob, index) => {
            if (index <= 5) {
                const ide = `output0${index}`
                //   const iden=`output${index}`
                //   console.log(ide)
                document.getElementById(ide).setAttribute("src", URL.createObjectURL(imageBlob))
                //   document.getElementById(iden).setAttribute("src",URL.createObjectURL(imageBlob))
            }
        });
    }
    function redrawImages5() {
        filli4.forEach((imageBlob, index) => {
            if (index <= 5) {
                const ide = `output3${index}`
                //   const iden=`output${index}`
                //   console.log(ide)
                document.getElementById(ide).setAttribute("src", URL.createObjectURL(imageBlob))
                //   document.getElementById(iden).setAttribute("src",URL.createObjectURL(imageBlob))
            }
        });
    }
    function redrawImages5() {
        filli4.forEach((imageBlob, index) => {
            if (index <= 5) {
                const ide = `output3${index}`
                //   const iden=`output${index}`
                //   console.log(ide)
                document.getElementById(ide).setAttribute("src", URL.createObjectURL(imageBlob))
                //   document.getElementById(iden).setAttribute("src",URL.createObjectURL(imageBlob))
            }
        });
    }

    var loadFile = (e) => {
        lim1 = lim1 + 1;
        // console.log(e.target)
        if (e.target.files.length === 1 && lim1 <= 6) {

            files = e.target.files;
            filli.push(e.target.files[0])
            rem.push(e.target.id);
            reader = new FileReader();
            // console.log(files)
            redrawImages2()


        }
        else {
            alert("limit reached")
            document.getElementById("ari").value = null;
        }
    };
    var loadFile2 = (e) => {
        // console.log(e)
        lim2 = lim2 + 1;
        if (e.target.files.length === 1 && lim2 <= 6) {
            files2 = e.target.files;
            filli2.push(e.target.files[0])
            rem.push(e.target.id);
            reader = new FileReader();
            redrawImages3()
            // console.log(files2)
            // reader.onload = function () {
            // console.log("image upload hua ")
            // console.log(e.target.getAttribute("data-id"))
            // document.getElementById(`output${e.target.getAttribute("data-id")}`).src = reader.result
            // }
            // reader.readAsDataURL(files2[0])
        }
        else {
            alert("limit reached")
            document.getElementById("ari2").value = null;
        }
    };
    var loadFile3 = (e) => {
        // console.log(e)
        lim3 = lim3 + 1;
        if (e.target.files.length === 1 && lim3 <= 6) {
            files3 = e.target.files;
            filli3.push(e.target.files[0])
            rem.push(e.target.id);
            // reader = new FileReader();
            redrawImages4()
            // console.log(files2)
            // reader.onload = function () {
            //     console.log("image upload hua ")
            //     document.getElementById(`output${e.target.getAttribute("data-id")}`).src = reader.result
            // }
            // reader.readAsDataURL(files3[0])
        }
        else {
            alert("limit reached")
            document.getElementById("ari3").value = null;
        }
    };
    var loadFile4 = (e) => {
        // console.log(e)
        lim4 = lim4 + 1;
        if (e.target.files.length === 1 && lim4 <= 6) {
            files4 = e.target.files;
            filli4.push(e.target.files[0])
            rem.push(e.target.id);
            redrawImages5()
            // reader = new FileReader();
            // // console.log(files2)
            // reader.onload = function () {
            //     console.log("image upload hua ")
            //     document.getElementById(`output${e.target.getAttribute("data-id")}`).src = reader.result
            // }
        }
        else {
            alert("limit reached")
            document.getElementById("ari4").value = null;
        }
        // reader.readAsDataURL(files4[0])
    };
    return (
        <>
              <form id="formy" ref={formy} >
                <div className="container">
                    {/* <div className="uip" id="upload_Pro">
                        <div id="uip" className="uploaded">
                            <div className="conty">
                                <div className="mySlides">
                                    <img id="slide0" alt="" src={sk} style={{ width: "100%" }} />
                                </div>

                                <div className="mySlides">
                                    <img id="slide1" alt="" src={sk} style={{ width: "100%" }} />
                                </div>

                                <div className="mySlides">
                                    <img
                                        id="slide2"
                                        src={sk}
                                        style={{ width: "100%" }}
                                        alt="demoimg"
                                    />
                                </div>

                                <div className="mySlides">
                                    <img
                                        id="slide3"
                                        src={sk}
                                        style={{ width: "100%" }}
                                        alt="demoimg"
                                    />
                                </div>

                                <div className="mySlides">
                                    <img
                                        id="slide4"
                                        src={sk}
                                        style={{ width: "100%" }}
                                        alt="demoimg"
                                    />
                                </div>

                                <div className="mySlides">
                                    <img
                                        id="slide5"
                                        src={sk}
                                        style={{ width: "100%" }}
                                        alt="demoimg"
                                    />
                                </div>

                                <button className="prev" onclick="plusSlides(-1)">
                                    ❮
                                </button>
                                <button className="next" onclick="plusSlides(1)">
                                    ❯
                                </button>

                                <div className="row">
                                    <div className="column">
                                        <img
                                            id="sliden0"
                                            className="demo cursor"
                                            src={sk}
                                            style={{ width: "100%" }}
                                            alt="demoimgs0"
                                            onclick="currentSlide(1)"
                                        />
                                    </div>
                                    <div className="column">
                                        <img
                                            id="sliden1"
                                            className="demo cursor"
                                            src={sk}
                                            style={{ width: "100%" }}
                                            alt="demoimgs1"
                                            onclick="currentSlide(2)"
                                        />
                                    </div>
                                    <div className="column">
                                        <img
                                            id="sliden2"
                                            className="demo cursor"
                                            src={sk}
                                            style={{ width: "100%" }}
                                            alt="demoimgs2"
                                            onclick="currentSlide(3)"
                                        />
                                    </div>
                                    <div className="column">
                                        <img
                                            id="sliden3"
                                            className="demo cursor"
                                            src={sk}
                                            style={{ width: "100%" }}
                                            alt="demoimgs3"
                                            onclick="currentSlide(4)"
                                        />
                                    </div>
                                    <div className="column">
                                        <img
                                            id="sliden4"
                                            className="demo cursor"
                                            src={sk}
                                            style={{ width: "100%" }}
                                            alt="demoimgs4"
                                            onclick="currentSlide(5)"
                                        />
                                    </div>
                                    <div className="column">
                                        <img
                                            id="sliden5"
                                            className="demo cursor"
                                            src={sk}
                                            style={{ width: "100%" }}
                                            alt="demoimgs5"
                                            onclick="currentSlide(6)"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="ext">
                                <input type="file" id="ini" onChange="loadimg(event)" />
                                <div id="buty" onclick="resu()">
                                    RESET
                                </div>
                            </div>
                            <label>Upload Your Profile </label>
                        </div>
                    </div> */}
                    <div className="Name">
                        <label>Name</label>
                        <input
                            id="val1"
                            type="text"
                            required
                            name="Name"
                            placeholder="Dr. K. Mehta"
                            onChange={handleInput}
                            value={Dets.Name}
                        >
                        </input>
                    </div>
                    <div className="Department">
                        <label htmlFor="subs" placeholder="Enter your Department ">
                            Department
                        </label>
                        <select id="subs" name="Department">
                            <option value="Aayurveda">Aayurveda</option>
                            <option value="Cardiologist">Cardiologist</option>
                            <option value="Audiologist">Audiologist</option>
                            <option value="Dentist">Dentist</option>
                            <option value="ENT">ENT</option>
                            <option value="Gynaceologist">Gynaceologist</option>
                            <option value="orthopedics">orthopedics</option>
                            <option value="pediatrician">pediatrician</option>
                            <option value="Psychiatrist">Psychiatrist</option>
                            <option value="Radiology">Radiology</option>
                            <option value="Endocrinologist">Endocrinologist</option>
                            <option value="Radiology">Dermatologist</option>
                        </select>
                    </div>
                    <div className="Working">
                        <label>Working at For</label>
                        <input
                            minLength="5"
                            type="text"
                            required
                            name="Working"
                            onChange={handleInput}
                            placeholder="Where you are working at"
                            value={Dets.Working}
                        ></input>
                    </div>
                    <div className="Education">
                        <label>Education</label>
                        <input type="text" id="dubs" name="Education" onChange={handleInput} value={Dets.Education} />
                    </div>

                    <div className="Description">
                        <label>Describe yourself</label>
                        <textarea
                            minLength="5"
                            type="text"
                            required
                            name="Description"
                            onChange={handleInput}
                            placeholder="Select and write abour Description here"
                            value={Dets.Description}
                        ></textarea>
                    </div>
                    <div id="upload_early_life">
                        <div className="uploaded">
                            <div className="ijk">
                                <p>
                                    <img id="output00" style={{ width: "200" }} alt="output" />
                                </p>
                                <p>
                                    <img id="output01" style={{ width: "200" }} alt="output" />
                                </p>
                                <p>
                                    <img id="output02" style={{ width: "200" }} alt="output" />
                                </p>
                                <p>
                                    <img id="output03" style={{ width: "200" }} alt="output" />
                                </p>
                                <p>
                                    <img id="output04" style={{ width: "200" }} alt="output" />
                                </p>
                                <p>
                                    <img id="output05" style={{ width: "200" }} alt="output" />
                                </p>
                            </div>

                            <input
                                type="file"
                                id="ari"
                                name="ip "
                                data-id="1"
                                onChange={loadFile}
                            />
                        </div>
                        <label>Upload Your EarlyLife </label>
                    </div>
                    <div className="Educational-Life">
                        <label>Describe your educational life</label>
                        <textarea
                            minLength="5"
                            type="text"
                            required
                            onChange={handleInput}
                            name="EducationalLife"
                            placeholder="Describe here"
                            value={Dets.EducationalLife}
                        ></textarea>
                    </div>

                    <div id="upload_education">
                        <div className="uploaded">
                            <div className="ijk2">
                                <p>
                                    <img id="output10" style={{ width: "200" }} alt="output" />
                                </p>
                                <p>
                                    <img id="output11" style={{ width: "200" }} alt="output" />
                                </p>
                                <p>
                                    <img id="output12" style={{ width: "200" }} alt="output" />
                                </p>
                                <p>
                                    <img id="output13" style={{ width: "200" }} alt="output" />
                                </p>
                                <p>
                                    <img id="output14" style={{ width: "200" }} alt="output" />
                                </p>
                                <p>
                                    <img id="output15" style={{ width: "200" }} alt="output" />
                                </p>
                            </div>

                            <input
                                type="file"
                                name="ip"
                                id="ari2"
                                data-id="2"
                                onChange={loadFile2}
                            />
                        </div>
                        <label>Upload Your Education Life pic</label>
                    </div>

                    <div className="Career">
                        <label>Write About Career Life</label>
                        <textarea
                            minLength="5"
                            type="text"
                            required
                            name="Career"
                            onChange={handleInput}
                            placeholder="Describe here"
                            value={Dets.Career}
                        ></textarea>
                    </div>
                    <div id="upload_career">
                        <div className="uploaded">
                            <div className="ijk3">
                                <p>
                                    <img id="output20" style={{ width: "200" }} alt="output" />
                                </p>
                                <p>
                                    <img id="output21" style={{ width: "200" }} alt="output" />
                                </p>
                                <p>
                                    <img id="output22" style={{ width: "200" }} alt="output" />
                                </p>
                                <p>
                                    <img id="output23" style={{ width: "200" }} alt="output" />
                                </p>
                                <p>
                                    <img id="output24" style={{ width: "200" }} alt="output" />
                                </p>
                                <p>
                                    <img id="output25" style={{ width: "200" }} alt="output" />
                                </p>
                            </div>

                            <input
                                type="file"
                                name="ip"
                                id="ari3"
                                data-id="3"
                                onChange={loadFile3}
                            />
                        </div>
                        <label>Upload Your career Life pic</label>
                    </div>

                    <div className="Awards">
                        <label>Awards & Achievements(If any)</label>
                        <textarea
                            minLength="5"
                            type="text"
                            required
                            name="Awards"
                            onChange={handleInput}
                            placeholder="Describe here"
                            value={Dets.Awards}
                        ></textarea>
                    </div>
                    <div id="upload_awards">
                        <div className="uploaded">
                            <div className="ijk4">
                                <p>
                                    <img id="output30" style={{ width: "200" }} alt="output" />
                                </p>
                                <p>
                                    <img id="output31" style={{ width: "200" }} alt="output" />
                                </p>
                                <p>
                                    <img id="output32" style={{ width: "200" }} alt="output" />
                                </p>
                                <p>
                                    <img id="output33" style={{ width: "200" }} alt="output" />
                                </p>
                                <p>
                                    <img id="output34" style={{ width: "200" }} alt="output" />
                                </p>
                                <p>
                                    <img id="output35" style={{ width: "200" }} alt="output" />
                                </p>
                            </div>

                            <input
                                type="file"
                                name="ip"
                                id="ari4"
                                data-id="4"
                                onChange={loadFile4}
                            />
                        </div>
                        <label>Upload Your awards Life pic</label>
                    </div>
                    <div className="Aboutu">
                        <label>
                            Personal thoughts or any life experience you want to share
                        </label>
                        <textarea
                            minLength="5"
                            type="text"
                            required
                            name="Aboutu"
                            onChange={handleInput}
                            value={Dets.Aboutu}
                            placeholder="Describe herevalue"
                        ></textarea>
                    </div>
                </div>
                <div className="concont">
                    <h1>Contact</h1>
                    <div className="field">
                        <div id="connum">
                            <label>Enter your phone number</label>
                            <input name="connum" onChange={handleInput} pattern="^\d{10}$" value={Dets.connum} required placeholder="928****212" type="text" />
                        </div>
                        <div id="conmail">
                            <label>Enter your email</label>
                            <input name="conmail" onChange={handleInput} minLength="5" value={Dets.conmail} required type="email" placeholder="xyz@gmail.com" />
                        </div>
                        <div id="conpermad">
                            <label>Permanent Address</label>
                            <textarea name="conpermad" onChange={handleInput} minLength="5" value={Dets.conpermad} required placeholder="permanent address"
                                type="text"></textarea>
                        </div>
                        <div id="conhosad">
                            <label>Workplace address(Hospital/Clinic)</label>
                            <textarea name="conhosad" onChange={handleInput} minLength="5" value={Dets.conhosad} required placeholder="workplace address"
                                type="text"></textarea>
                        </div>
                    </div>
                </div>
                <button onClick={SubmitEvent}>Submit</button>
            </form>
        </>
    )
}

export default FormBody
