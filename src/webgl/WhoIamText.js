import * as THREE from 'three';
import { easeInCubic, easeOutCubic } from 'easing-js';
import { MathEx } from '@ykob/js-util';

import store from '@/store';
import vs from '@/webgl/glsl/WhoIamText.vs';
import fs from '@/webgl/glsl/WhoIamText.fs';

const WIDTH = 44;
const DURATION_SHOW = 6;
const DELAY_SHOW = 0.4;
const DURATION_HIDE = 4;
const DELAY_HIDE = 0.2;
const DURATION_TRANSITION_SHOW = 2.6;
const DELAY_TRANSITION_SHOW = 0;
const DURATION_TRANSITION_HIDE = 1.8;
const DELAY_TRANSITION_HIDE = 0;

function createWhoIamCanvasTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 2048;
  canvas.height = 2048;
  const ctx = canvas.getContext('2d');

  ctx.clearRect(0, 0, 2048, 2048);

  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  if (ctx.letterSpacing !== undefined) {
    ctx.letterSpacing = '6px';
  }

  const lines = [
    { text: 'MAKING SURE MY LIFE', flip: true },
    { text: 'IS FULL OF', flip: true },
    { text: '"CAN\'T BELEIVE I DID THAT"', flip: true },
    { text: 'INSTEAD OF', flip: true },
    { text: '"I SHOULD HAVE DONE THAT"', flip: true }
  ];

  const fontSize = 68;
  const lineHeight = 140;
  const startY = 1024 - ((lines.length - 1) * lineHeight) / 2;

  ctx.font = `bold ${fontSize}px "EngraversMTPro", "Cinzel", "Times New Roman", serif`;

  lines.forEach((item, index) => {
    const y = startY + index * lineHeight;
    ctx.save();
    ctx.translate(1024, y);
    if (item.flip) {
      ctx.scale(-1, -1);
    }
    ctx.fillText(item.text, 0, 0);
    ctx.restore();
  });

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

export default class WhoIamText extends THREE.Mesh {
  constructor() {
    // Define Geometry
    const geometry = new THREE.PlaneBufferGeometry(WIDTH, WIDTH, 64, 64);

    // Define Material
    const material = new THREE.RawShaderMaterial({
      uniforms: {
        time: {
          value: 0
        },
        tex: {
          value: null
        },
        alphaShow: {
          value: 0
        },
        alphaHide: {
          value: 0
        }
      },
      vertexShader: vs,
      fragmentShader: fs,
      transparent: true
    });

    // Create Object3D
    super(geometry, material);
    this.name = 'WhoIamText';
    this.time = 0;
    this.timeShow = 0;
    this.timeHide = 0;
    this.isActive = false;
    this.isShown = false;
    this.isHidden = false;
  }
  start() {
    this.isActive = true;
    this.material.uniforms.tex.value = createWhoIamCanvasTexture();
  }
  show() {
    this.timeShow = 0;
    this.timeHide = 0;
    this.isShown = true;
    this.isHidden = false;
  }
  hide() {
    this.isHidden = true;
  }
  update(time) {
    const { scrollProgress } = store.state;

    if (this.isActive === false) return;
    this.material.uniforms.time.value += time;

    // for the showing effect.
    if (this.isShown === true) {
      this.timeShow += time;
    }

    // for the hiding effect.
    if (this.isHidden === true) {
      this.timeHide += time;
    }

    const alphaShow = easeOutCubic(
      MathEx.clamp((this.timeShow - DELAY_SHOW) / DURATION_SHOW, 0.0, 1.0)
    );
    const alphaHide = easeOutCubic(
      MathEx.clamp((this.timeHide - DELAY_HIDE) / DURATION_HIDE, 0.0, 1.0)
    );
    const alphaTransitionShow = easeOutCubic(
      MathEx.clamp(
        (this.timeShow - DELAY_TRANSITION_SHOW) / DURATION_TRANSITION_SHOW,
        0.0,
        1.0
      )
    );
    const alphaTransitionHide = easeInCubic(
      MathEx.clamp(
        (this.timeHide - DELAY_TRANSITION_HIDE) / DURATION_TRANSITION_HIDE,
        0.0,
        1.0
      )
    );
    const alphaTransition = alphaTransitionShow * (1.0 - alphaTransitionHide);

    this.material.uniforms.alphaShow.value = alphaShow;
    this.material.uniforms.alphaHide.value = alphaHide;
    this.positionYBase = 4 - (1 - alphaTransition) * 30;

    // Scrolling
    this.position.y = this.positionYBase + scrollProgress * 15;
  }
}
