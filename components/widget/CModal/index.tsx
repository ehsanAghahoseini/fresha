import React, { useState } from "react";

export declare type ModalProps = {
    uId: string,
    visible: boolean,
    setVisible: CallableFunction;
    title?: string,
    onScap?: () => void;
    children?: JSX.Element | JSX.Element[],
    accessClose?: boolean,
    width?: string,
    maxWidth?: string,
    radius?: string,
    className ?:string ,
}


function CModal({ title, visible, setVisible, onScap, children, accessClose = false,className , width = '500px', radius = "5px", uId, maxWidth }: ModalProps) {

    React.useEffect(() => {
        toggle(visible)
    }, [visible])

    function toggle(val: any) {
        const body = document.getElementsByTagName("body")[0];
        if (val) {
            body.style.touchAction = "none";
            body.style.width = "100%";
            body.style.overflow = "hidden";
        } else {
            body.style.touchAction = "unset";
            body.style.width = "unset";
            body.style.overflow = "auto";
        }
    }


    const handelClose = () => {
        const Modal = document.getElementById(`CModal-${uId}`);
        const contModal = document.getElementById(`CModal-cont-${uId}`);
        window.addEventListener('mousedown', function (e: any) {
            if (Modal!.contains(e.target)) {
                if (!contModal!.contains(e.target)) {
                    // Modal.classList.remove('CModal-active')
                    setVisible(false)
                    onScap?.()
                }
            }
        });
    }


    React.useEffect(() => {
        handelClose()
    }, [])



    return (
        <div id={`CModal-${uId}`} className={`CModal ${visible && 'CModal-active'}`}>
            <div id={`CModal-cont-${uId}`} className={`CModal-cont ${className}`} style={{ borderRadius: radius, maxWidth: maxWidth, }}>
                {title &&
                    <div className="CModel-head">
                        <h4>{title}</h4>
                    </div>
                }
                {children}
            </div>
        </div>
    )
}

export default CModal;