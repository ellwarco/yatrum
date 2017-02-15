/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../../../../../src/app/components/trips/trip-edit/add-place/add-place.component';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '@angular/forms/src/form_builder';
import * as import10 from '../../../../../../../src/app/services/cloudinary-integration.service';
import * as import11 from './add-place.component.scss.shim.ngstyle';
import * as import12 from '@angular/core/src/linker/view_container';
import * as import13 from '@angular/core/src/security';
import * as import14 from '../../../../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import15 from '@angular/core/src/linker/template_ref';
import * as import16 from '@angular/common/src/directives/ng_if';
import * as import17 from '../../../../../../node_modules/@angular/forms/src/directives/reactive_directives/form_group_directive.ngfactory';
import * as import18 from '../../../../../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import19 from '../../../../../../node_modules/@angular/forms/src/directives/default_value_accessor.ngfactory';
import * as import20 from '../../../../../../node_modules/@angular/forms/src/directives/reactive_directives/form_control_name.ngfactory';
import * as import21 from 'angular2-material-datepicker/src/datepicker.component';
import * as import22 from '../../../../../../node_modules/angular2-material-datepicker/src/datepicker.component.ngfactory';
import * as import23 from '../../../../../../node_modules/angular2-autosize/src/autosize.directive.ngfactory';
import * as import24 from '../../../../../../../src/app/components/trips/trip-edit/image-upload/image-upload.component';
import * as import25 from '../image-upload/image-upload.component.ngfactory';
import * as import26 from '../../../../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import27 from '@angular/core/src/linker/element_ref';
import * as import28 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import29 from '@angular/forms/src/directives/default_value_accessor';
import * as import30 from '@angular/forms/src/directives/control_value_accessor';
import * as import31 from '@angular/forms/src/directives/reactive_directives/form_control_name';
import * as import32 from '@angular/forms/src/directives/ng_control';
import * as import33 from '@angular/forms/src/directives/ng_control_status';
import * as import34 from 'angular2-autosize/src/autosize.directive';
import * as import35 from '@angular/common/src/directives/ng_for';
import * as import36 from '@angular/forms/src/directives/reactive_directives/form_group_directive';
import * as import37 from '@angular/forms/src/directives/control_container';
export class Wrapper_AddPlaceComponent {
  /*private*/ _eventHandler:Function;
  context:import0.AddPlaceComponent;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  subscription0:any;
  constructor(p0:any,p1:any) {
    this._changed = false;
    this.context = new import0.AddPlaceComponent(p0,p1);
    this._expr_0 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    (this.subscription0 && this.subscription0.unsubscribe());
  }
  check_place(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.place = currValue;
      this._expr_0 = currValue;
    }
  }
  ngDoCheck(view:import2.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) { if ((view.numberOfChecks === 0)) { this.context.ngOnInit(); } }
    return changed;
  }
  checkHost(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import2.AppView<any>,_eventHandler:any,emit0:boolean):void {
    this._eventHandler = _eventHandler;
    if (emit0) { (this.subscription0 = this.context.newPlace.subscribe(_eventHandler.bind(view,'newPlace'))); }
  }
}
var renderType_AddPlaceComponent_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_AddPlaceComponent_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.AddPlaceComponent>;
  _AddPlaceComponent_0_3:Wrapper_AddPlaceComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_AddPlaceComponent_Host0,renderType_AddPlaceComponent_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'tr-add-place',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_AddPlaceComponent0(this.viewUtils,this,0,this._el_0);
    this._AddPlaceComponent_0_3 = new Wrapper_AddPlaceComponent(this.injectorGet(import9.FormBuilder,this.parentIndex),this.injectorGet(import10.CloudinaryIntegrationService,this.parentIndex));
    this.compView_0.create(this._AddPlaceComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import8.ComponentRef_<any>(0,this,this._el_0,this._AddPlaceComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.AddPlaceComponent) && (0 === requestNodeIndex))) { return this._AddPlaceComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._AddPlaceComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._AddPlaceComponent_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const AddPlaceComponentNgFactory:import8.ComponentFactory<import0.AddPlaceComponent> = new import8.ComponentFactory<import0.AddPlaceComponent>('tr-add-place',View_AddPlaceComponent_Host0,import0.AddPlaceComponent);
const styles_AddPlaceComponent:any[] = [import11.styles];
class View_AddPlaceComponent2 extends import2.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  /*private*/ _expr_6:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import12.ViewContainer) {
    super(View_AddPlaceComponent2,renderType_AddPlaceComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_6 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'span',new import3.InlineArray2(2,'class','place-image-field'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'img',new import3.InlineArray2(2,'class','place-image'),(null as any));
    this._text_3 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    this._el_4 = import3.createRenderElement(this.renderer,this._el_0,'i',new import3.InlineArray2(2,'class','remove icon'),(null as any));
    this._text_5 = this.renderer.createText(this._el_0,'\n      ',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_4,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_4));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5
    ]
    ),[disposable_0]);
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_6:any = this.parentView.context.$implicit.url;
    if (import3.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this.renderer.setElementProperty(this._el_2,'src',this.viewUtils.sanitizer.sanitize(import13.SecurityContext.URL,currVal_6));
      this._expr_6 = currVal_6;
    }
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_4(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.parentView.parentView.context.removeImage(this.parentView.context.$implicit,this.parentView.context.index)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}
class View_AddPlaceComponent1 extends import2.AppView<any> {
  _el_0:any;
  _text_1:any;
  _anchor_2:any;
  /*private*/ _vc_2:import12.ViewContainer;
  _TemplateRef_2_5:any;
  _NgIf_2_6:import14.Wrapper_NgIf;
  _text_3:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import12.ViewContainer) {
    super(View_AddPlaceComponent1,renderType_AddPlaceComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'span',new import3.InlineArray2(2,'class','images'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n      ',(null as any));
    this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._vc_2 = new import12.ViewContainer(2,0,this,this._anchor_2);
    this._TemplateRef_2_5 = new import15.TemplateRef_(this,2,this._anchor_2);
    this._NgIf_2_6 = new import14.Wrapper_NgIf(this._vc_2.vcRef,this._TemplateRef_2_5);
    this._text_3 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._anchor_2,
      this._text_3
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import15.TemplateRef) && (2 === requestNodeIndex))) { return this._TemplateRef_2_5; }
    if (((token === import16.NgIf) && (2 === requestNodeIndex))) { return this._NgIf_2_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2_0_0:boolean = !this.context.$implicit._destroy;
    this._NgIf_2_6.check_ngIf(currVal_2_0_0,throwOnChange,false);
    this._NgIf_2_6.ngDoCheck(this,this._anchor_2,throwOnChange);
    this._vc_2.detectChangesInNestedViews(throwOnChange);
  }
  destroyInternal():void {
    this._vc_2.destroyNestedViews();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 2)) { return new View_AddPlaceComponent2(this.viewUtils,this,2,this._anchor_2,this._vc_2); }
    return (null as any);
  }
}
class View_AddPlaceComponent3 extends import2.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _text_6:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import12.ViewContainer) {
    super(View_AddPlaceComponent3,renderType_AddPlaceComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'div',new import3.InlineArray2(2,'class','save-button'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'button',new import3.InlineArray4(4,'class','ui button','type','submit'),(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'\n      ',(null as any));
    this._el_4 = import3.createRenderElement(this.renderer,this._el_2,'i',new import3.InlineArray2(2,'class','plus icon'),(null as any));
    this._text_5 = this.renderer.createText(this._el_2,'\n      Save\n    ',(null as any));
    this._text_6 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._text_6
    ]
    ),(null as any));
    return (null as any);
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
class View_AddPlaceComponent4 extends import2.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _text_6:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import12.ViewContainer) {
    super(View_AddPlaceComponent4,renderType_AddPlaceComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'div',new import3.InlineArray2(2,'class','save-button'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'button',new import3.InlineArray4(4,'class','ui button','type','submit'),(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'\n      ',(null as any));
    this._el_4 = import3.createRenderElement(this.renderer,this._el_2,'i',new import3.InlineArray2(2,'class','checkmark icon'),(null as any));
    this._text_5 = this.renderer.createText(this._el_2,'\n      update\n    ',(null as any));
    this._text_6 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._text_6
    ]
    ),(null as any));
    return (null as any);
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
var renderType_AddPlaceComponent:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.Emulated,styles_AddPlaceComponent,{});
export class View_AddPlaceComponent0 extends import2.AppView<import0.AddPlaceComponent> {
  _el_0:any;
  _FormGroupDirective_0_3:import17.Wrapper_FormGroupDirective;
  _ControlContainer_0_4:any;
  _NgControlStatusGroup_0_5:import18.Wrapper_NgControlStatusGroup;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _el_6:any;
  _text_7:any;
  _el_8:any;
  _text_9:any;
  _el_10:any;
  _DefaultValueAccessor_10_3:import19.Wrapper_DefaultValueAccessor;
  _NG_VALUE_ACCESSOR_10_4:any[];
  _FormControlName_10_5:import20.Wrapper_FormControlName;
  _NgControl_10_6:any;
  _NgControlStatus_10_7:import18.Wrapper_NgControlStatus;
  _text_11:any;
  _text_12:any;
  _el_13:any;
  _text_14:any;
  _el_15:any;
  _DefaultValueAccessor_15_3:import19.Wrapper_DefaultValueAccessor;
  _NG_VALUE_ACCESSOR_15_4:any[];
  _FormControlName_15_5:import20.Wrapper_FormControlName;
  _NgControl_15_6:any;
  _NgControlStatus_15_7:import18.Wrapper_NgControlStatus;
  _text_16:any;
  _el_17:any;
  compView_17:import2.AppView<import21.DatepickerComponent>;
  _DatepickerComponent_17_3:import22.Wrapper_DatepickerComponent;
  _text_18:any;
  _el_19:any;
  _text_20:any;
  _text_21:any;
  _text_22:any;
  _text_23:any;
  _el_24:any;
  _text_25:any;
  _el_26:any;
  _DefaultValueAccessor_26_3:import19.Wrapper_DefaultValueAccessor;
  _NG_VALUE_ACCESSOR_26_4:any[];
  _FormControlName_26_5:import20.Wrapper_FormControlName;
  _NgControl_26_6:any;
  _NgControlStatus_26_7:import18.Wrapper_NgControlStatus;
  _Autosize_26_8:import23.Wrapper_Autosize;
  _text_27:any;
  _text_28:any;
  _el_29:any;
  _text_30:any;
  _el_31:any;
  compView_31:import2.AppView<import24.ImageUploadComponent>;
  _ImageUploadComponent_31_3:import25.Wrapper_ImageUploadComponent;
  _text_32:any;
  _anchor_33:any;
  /*private*/ _vc_33:import12.ViewContainer;
  _TemplateRef_33_5:any;
  _NgFor_33_6:import26.Wrapper_NgFor;
  _text_34:any;
  _text_35:any;
  _anchor_36:any;
  /*private*/ _vc_36:import12.ViewContainer;
  _TemplateRef_36_5:any;
  _NgIf_36_6:import14.Wrapper_NgIf;
  _text_37:any;
  _anchor_38:any;
  /*private*/ _vc_38:import12.ViewContainer;
  _TemplateRef_38_5:any;
  _NgIf_38_6:import14.Wrapper_NgIf;
  _text_39:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_AddPlaceComponent0,renderType_AddPlaceComponent,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._el_0 = import3.createRenderElement(this.renderer,parentRenderNode,'form',new import3.InlineArray2(2,'class','ui form'),(null as any));
    this._FormGroupDirective_0_3 = new import17.Wrapper_FormGroupDirective((null as any),(null as any));
    this._ControlContainer_0_4 = this._FormGroupDirective_0_3.context;
    this._NgControlStatusGroup_0_5 = new import18.Wrapper_NgControlStatusGroup(this._ControlContainer_0_4);
    this._text_1 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'div',new import3.InlineArray2(2,'class','content form-header'),(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._el_4 = import3.createRenderElement(this.renderer,this._el_2,'div',new import3.InlineArray2(2,'class','inline fields'),(null as any));
    this._text_5 = this.renderer.createText(this._el_4,'\n      ',(null as any));
    this._el_6 = import3.createRenderElement(this.renderer,this._el_4,'div',new import3.InlineArray2(2,'class','ten wide field'),(null as any));
    this._text_7 = this.renderer.createText(this._el_6,'\n        ',(null as any));
    this._el_8 = import3.createRenderElement(this.renderer,this._el_6,'i',new import3.InlineArray2(2,'class','marker big icon'),(null as any));
    this._text_9 = this.renderer.createText(this._el_6,'\n        ',(null as any));
    this._el_10 = import3.createRenderElement(this.renderer,this._el_6,'input',new import3.InlineArray8(8,'class','place-name','formControlName','name','placeholder','Add Place','type','text'),(null as any));
    this._DefaultValueAccessor_10_3 = new import19.Wrapper_DefaultValueAccessor(this.renderer,new import27.ElementRef(this._el_10));
    this._NG_VALUE_ACCESSOR_10_4 = [this._DefaultValueAccessor_10_3.context];
    this._FormControlName_10_5 = new import20.Wrapper_FormControlName(this._ControlContainer_0_4,(null as any),(null as any),this._NG_VALUE_ACCESSOR_10_4);
    this._NgControl_10_6 = this._FormControlName_10_5.context;
    this._NgControlStatus_10_7 = new import18.Wrapper_NgControlStatus(this._NgControl_10_6);
    this._text_11 = this.renderer.createText(this._el_6,'\n      ',(null as any));
    this._text_12 = this.renderer.createText(this._el_4,'\n      ',(null as any));
    this._el_13 = import3.createRenderElement(this.renderer,this._el_4,'div',new import3.InlineArray2(2,'class','six wide field place-date-field'),(null as any));
    this._text_14 = this.renderer.createText(this._el_13,'\n        ',(null as any));
    this._el_15 = import3.createRenderElement(this.renderer,this._el_13,'input',new import3.InlineArray2(2,'formControlName','visitedDate'),(null as any));
    this._DefaultValueAccessor_15_3 = new import19.Wrapper_DefaultValueAccessor(this.renderer,new import27.ElementRef(this._el_15));
    this._NG_VALUE_ACCESSOR_15_4 = [this._DefaultValueAccessor_15_3.context];
    this._FormControlName_15_5 = new import20.Wrapper_FormControlName(this._ControlContainer_0_4,(null as any),(null as any),this._NG_VALUE_ACCESSOR_15_4);
    this._NgControl_15_6 = this._FormControlName_15_5.context;
    this._NgControlStatus_15_7 = new import18.Wrapper_NgControlStatus(this._NgControl_15_6);
    this._text_16 = this.renderer.createText(this._el_13,'\n\n        ',(null as any));
    this._el_17 = import3.createRenderElement(this.renderer,this._el_13,'material-datepicker',new import3.InlineArray4(4,'class','place-date text-right','dateFormat','DD-MM-YYYY'),(null as any));
    this.compView_17 = new import22.View_DatepickerComponent0(this.viewUtils,this,17,this._el_17);
    this._DatepickerComponent_17_3 = new import22.Wrapper_DatepickerComponent(this.renderer,new import27.ElementRef(this._el_17));
    this.compView_17.create(this._DatepickerComponent_17_3.context);
    this._text_18 = this.renderer.createText(this._el_13,'\n        ',(null as any));
    this._el_19 = import3.createRenderElement(this.renderer,this._el_13,'i',new import3.InlineArray2(2,'class','add to calendar big icon'),(null as any));
    this._text_20 = this.renderer.createText(this._el_13,'\n\n      ',(null as any));
    this._text_21 = this.renderer.createText(this._el_4,'\n    ',(null as any));
    this._text_22 = this.renderer.createText(this._el_2,'\n  ',(null as any));
    this._text_23 = this.renderer.createText(this._el_0,'  \n  ',(null as any));
    this._el_24 = import3.createRenderElement(this.renderer,this._el_0,'div',new import3.InlineArray2(2,'class','field'),(null as any));
    this._text_25 = this.renderer.createText(this._el_24,'\n    ',(null as any));
    this._el_26 = import3.createRenderElement(this.renderer,this._el_24,'textarea',new import3.InlineArray8(8,'autosize','','class','','formControlName','review','placeholder','What\'s so cool about this place?\''),(null as any));
    this._DefaultValueAccessor_26_3 = new import19.Wrapper_DefaultValueAccessor(this.renderer,new import27.ElementRef(this._el_26));
    this._NG_VALUE_ACCESSOR_26_4 = [this._DefaultValueAccessor_26_3.context];
    this._FormControlName_26_5 = new import20.Wrapper_FormControlName(this._ControlContainer_0_4,(null as any),(null as any),this._NG_VALUE_ACCESSOR_26_4);
    this._NgControl_26_6 = this._FormControlName_26_5.context;
    this._NgControlStatus_26_7 = new import18.Wrapper_NgControlStatus(this._NgControl_26_6);
    this._Autosize_26_8 = new import23.Wrapper_Autosize(new import27.ElementRef(this._el_26));
    this._text_27 = this.renderer.createText(this._el_24,'\n  ',(null as any));
    this._text_28 = this.renderer.createText(this._el_0,'  \n  ',(null as any));
    this._el_29 = import3.createRenderElement(this.renderer,this._el_0,'div',new import3.InlineArray2(2,'class','field'),(null as any));
    this._text_30 = this.renderer.createText(this._el_29,'\n    ',(null as any));
    this._el_31 = import3.createRenderElement(this.renderer,this._el_29,'tr-image-upload',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_31 = new import25.View_ImageUploadComponent0(this.viewUtils,this,31,this._el_31);
    this._ImageUploadComponent_31_3 = new import25.Wrapper_ImageUploadComponent(this.parentView.injectorGet(import10.CloudinaryIntegrationService,this.parentIndex),this.renderer);
    this.compView_31.create(this._ImageUploadComponent_31_3.context);
    this._text_32 = this.renderer.createText(this._el_29,'\n    ',(null as any));
    this._anchor_33 = this.renderer.createTemplateAnchor(this._el_29,(null as any));
    this._vc_33 = new import12.ViewContainer(33,29,this,this._anchor_33);
    this._TemplateRef_33_5 = new import15.TemplateRef_(this,33,this._anchor_33);
    this._NgFor_33_6 = new import26.Wrapper_NgFor(this._vc_33.vcRef,this._TemplateRef_33_5,this.parentView.injectorGet(import28.IterableDiffers,this.parentIndex),this.ref);
    this._text_34 = this.renderer.createText(this._el_29,'\n  ',(null as any));
    this._text_35 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._anchor_36 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._vc_36 = new import12.ViewContainer(36,0,this,this._anchor_36);
    this._TemplateRef_36_5 = new import15.TemplateRef_(this,36,this._anchor_36);
    this._NgIf_36_6 = new import14.Wrapper_NgIf(this._vc_36.vcRef,this._TemplateRef_36_5);
    this._text_37 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._anchor_38 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._vc_38 = new import12.ViewContainer(38,0,this,this._anchor_38);
    this._TemplateRef_38_5 = new import15.TemplateRef_(this,38,this._anchor_38);
    this._NgIf_38_6 = new import14.Wrapper_NgIf(this._vc_38.vcRef,this._TemplateRef_38_5);
    this._text_39 = this.renderer.createText(this._el_0,'\n',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_0,new import3.InlineArray8(6,'ngSubmit',(null as any),'submit',(null as any),'reset',(null as any)),this.eventHandler(this.handleEvent_0));
    this._FormGroupDirective_0_3.subscribe(this,this.eventHandler(this.handleEvent_0),true);
    var disposable_1:Function = import3.subscribeToRenderElement(this,this._el_10,new import3.InlineArray8(6,'focus',(null as any),'input',(null as any),'blur',(null as any)),this.eventHandler(this.handleEvent_10));
    var disposable_2:Function = import3.subscribeToRenderElement(this,this._el_15,new import3.InlineArray8(6,'ngModelChange',(null as any),'input',(null as any),'blur',(null as any)),this.eventHandler(this.handleEvent_15));
    this._FormControlName_15_5.subscribe(this,this.eventHandler(this.handleEvent_15),true);
    var disposable_3:Function = import3.subscribeToRenderElement(this,this._el_17,new import3.InlineArray2(2,'dateChange',(null as any)),this.eventHandler(this.handleEvent_17));
    this._DatepickerComponent_17_3.subscribe(this,this.eventHandler(this.handleEvent_17),true,false);
    var disposable_4:Function = import3.subscribeToRenderElement(this,this._el_26,new import3.InlineArray4(4,'input',(null as any),'blur',(null as any)),this.eventHandler(this.handleEvent_26));
    var disposable_5:Function = import3.subscribeToRenderElement(this,this._el_31,new import3.InlineArray2(2,'imageData',(null as any)),this.eventHandler(this.handleEvent_31));
    this._ImageUploadComponent_31_3.subscribe(this,this.eventHandler(this.handleEvent_31),true);
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._el_8,
      this._text_9,
      this._el_10,
      this._text_11,
      this._text_12,
      this._el_13,
      this._text_14,
      this._el_15,
      this._text_16,
      this._el_17,
      this._text_18,
      this._el_19,
      this._text_20,
      this._text_21,
      this._text_22,
      this._text_23,
      this._el_24,
      this._text_25,
      this._el_26,
      this._text_27,
      this._text_28,
      this._el_29,
      this._text_30,
      this._el_31,
      this._text_32,
      this._anchor_33,
      this._text_34,
      this._text_35,
      this._anchor_36,
      this._text_37,
      this._anchor_38,
      this._text_39
    ]
    ),[
      disposable_0,
      disposable_1,
      disposable_2,
      disposable_3,
      disposable_4,
      disposable_5
    ]
    );
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import29.DefaultValueAccessor) && (10 === requestNodeIndex))) { return this._DefaultValueAccessor_10_3.context; }
    if (((token === import30.NG_VALUE_ACCESSOR) && (10 === requestNodeIndex))) { return this._NG_VALUE_ACCESSOR_10_4; }
    if (((token === import31.FormControlName) && (10 === requestNodeIndex))) { return this._FormControlName_10_5.context; }
    if (((token === import32.NgControl) && (10 === requestNodeIndex))) { return this._NgControl_10_6; }
    if (((token === import33.NgControlStatus) && (10 === requestNodeIndex))) { return this._NgControlStatus_10_7.context; }
    if (((token === import29.DefaultValueAccessor) && (15 === requestNodeIndex))) { return this._DefaultValueAccessor_15_3.context; }
    if (((token === import30.NG_VALUE_ACCESSOR) && (15 === requestNodeIndex))) { return this._NG_VALUE_ACCESSOR_15_4; }
    if (((token === import31.FormControlName) && (15 === requestNodeIndex))) { return this._FormControlName_15_5.context; }
    if (((token === import32.NgControl) && (15 === requestNodeIndex))) { return this._NgControl_15_6; }
    if (((token === import33.NgControlStatus) && (15 === requestNodeIndex))) { return this._NgControlStatus_15_7.context; }
    if (((token === import21.DatepickerComponent) && (17 === requestNodeIndex))) { return this._DatepickerComponent_17_3.context; }
    if (((token === import29.DefaultValueAccessor) && (26 === requestNodeIndex))) { return this._DefaultValueAccessor_26_3.context; }
    if (((token === import30.NG_VALUE_ACCESSOR) && (26 === requestNodeIndex))) { return this._NG_VALUE_ACCESSOR_26_4; }
    if (((token === import31.FormControlName) && (26 === requestNodeIndex))) { return this._FormControlName_26_5.context; }
    if (((token === import32.NgControl) && (26 === requestNodeIndex))) { return this._NgControl_26_6; }
    if (((token === import33.NgControlStatus) && (26 === requestNodeIndex))) { return this._NgControlStatus_26_7.context; }
    if (((token === import34.Autosize) && (26 === requestNodeIndex))) { return this._Autosize_26_8.context; }
    if (((token === import24.ImageUploadComponent) && (31 === requestNodeIndex))) { return this._ImageUploadComponent_31_3.context; }
    if (((token === import15.TemplateRef) && (33 === requestNodeIndex))) { return this._TemplateRef_33_5; }
    if (((token === import35.NgFor) && (33 === requestNodeIndex))) { return this._NgFor_33_6.context; }
    if (((token === import15.TemplateRef) && (36 === requestNodeIndex))) { return this._TemplateRef_36_5; }
    if (((token === import16.NgIf) && (36 === requestNodeIndex))) { return this._NgIf_36_6.context; }
    if (((token === import15.TemplateRef) && (38 === requestNodeIndex))) { return this._TemplateRef_38_5; }
    if (((token === import16.NgIf) && (38 === requestNodeIndex))) { return this._NgIf_38_6.context; }
    if (((token === import36.FormGroupDirective) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 39)))) { return this._FormGroupDirective_0_3.context; }
    if (((token === import37.ControlContainer) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 39)))) { return this._ControlContainer_0_4; }
    if (((token === import33.NgControlStatusGroup) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 39)))) { return this._NgControlStatusGroup_0_5.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = this.context.placeForm;
    this._FormGroupDirective_0_3.check_form(currVal_0_0_0,throwOnChange,false);
    this._FormGroupDirective_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this._NgControlStatusGroup_0_5.ngDoCheck(this,this._el_0,throwOnChange);
    this._DefaultValueAccessor_10_3.ngDoCheck(this,this._el_10,throwOnChange);
    const currVal_10_1_0:any = 'name';
    this._FormControlName_10_5.check_name(currVal_10_1_0,throwOnChange,false);
    this._FormControlName_10_5.ngDoCheck(this,this._el_10,throwOnChange);
    this._NgControlStatus_10_7.ngDoCheck(this,this._el_10,throwOnChange);
    this._DefaultValueAccessor_15_3.ngDoCheck(this,this._el_15,throwOnChange);
    const currVal_15_1_0:any = 'visitedDate';
    this._FormControlName_15_5.check_name(currVal_15_1_0,throwOnChange,false);
    const currVal_15_1_1:any = this.context.datePickerDate;
    this._FormControlName_15_5.check_model(currVal_15_1_1,throwOnChange,false);
    this._FormControlName_15_5.ngDoCheck(this,this._el_15,throwOnChange);
    this._NgControlStatus_15_7.ngDoCheck(this,this._el_15,throwOnChange);
    const currVal_17_0_0:any = this.context.datePickerDate;
    this._DatepickerComponent_17_3.check_date(currVal_17_0_0,throwOnChange,false);
    const currVal_17_0_1:any = 'DD-MM-YYYY';
    this._DatepickerComponent_17_3.check_dateFormat(currVal_17_0_1,throwOnChange,false);
    this._DatepickerComponent_17_3.ngDoCheck(this,this._el_17,throwOnChange);
    this._DefaultValueAccessor_26_3.ngDoCheck(this,this._el_26,throwOnChange);
    const currVal_26_1_0:any = 'review';
    this._FormControlName_26_5.check_name(currVal_26_1_0,throwOnChange,false);
    this._FormControlName_26_5.ngDoCheck(this,this._el_26,throwOnChange);
    this._NgControlStatus_26_7.ngDoCheck(this,this._el_26,throwOnChange);
    this._Autosize_26_8.ngDoCheck(this,this._el_26,throwOnChange);
    this._ImageUploadComponent_31_3.ngDoCheck(this,this._el_31,throwOnChange);
    const currVal_33_0_0:any = this.context.placeForm.controls['pictures'].value;
    this._NgFor_33_6.check_ngForOf(currVal_33_0_0,throwOnChange,false);
    this._NgFor_33_6.ngDoCheck(this,this._anchor_33,throwOnChange);
    const currVal_36_0_0:boolean = !this.context.place;
    this._NgIf_36_6.check_ngIf(currVal_36_0_0,throwOnChange,false);
    this._NgIf_36_6.ngDoCheck(this,this._anchor_36,throwOnChange);
    const currVal_38_0_0:any = this.context.place;
    this._NgIf_38_6.check_ngIf(currVal_38_0_0,throwOnChange,false);
    this._NgIf_38_6.ngDoCheck(this,this._anchor_38,throwOnChange);
    this._vc_33.detectChangesInNestedViews(throwOnChange);
    this._vc_36.detectChangesInNestedViews(throwOnChange);
    this._vc_38.detectChangesInNestedViews(throwOnChange);
    if (!throwOnChange) { this._Autosize_26_8.context.ngAfterContentChecked(); }
    this._NgControlStatusGroup_0_5.checkHost(this,this,this._el_0,throwOnChange);
    this._NgControlStatus_10_7.checkHost(this,this,this._el_10,throwOnChange);
    this._NgControlStatus_15_7.checkHost(this,this,this._el_15,throwOnChange);
    this._NgControlStatus_26_7.checkHost(this,this,this._el_26,throwOnChange);
    this.compView_17.internalDetectChanges(throwOnChange);
    this.compView_31.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this._vc_33.destroyNestedViews();
    this._vc_36.destroyNestedViews();
    this._vc_38.destroyNestedViews();
    this.compView_17.destroy();
    this.compView_31.destroy();
    this._FormControlName_10_5.ngOnDestroy();
    this._FormControlName_15_5.ngOnDestroy();
    this._DatepickerComponent_17_3.ngOnDestroy();
    this._FormControlName_26_5.ngOnDestroy();
    this._ImageUploadComponent_31_3.ngOnDestroy();
    this._FormGroupDirective_0_3.ngOnDestroy();
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 33)) { return new View_AddPlaceComponent1(this.viewUtils,this,33,this._anchor_33,this._vc_33); }
    if ((nodeIndex == 36)) { return new View_AddPlaceComponent3(this.viewUtils,this,36,this._anchor_36,this._vc_36); }
    if ((nodeIndex == 38)) { return new View_AddPlaceComponent4(this.viewUtils,this,38,this._anchor_38,this._vc_38); }
    return (null as any);
  }
  handleEvent_0(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._FormGroupDirective_0_3.handleEvent(eventName,$event) && result);
    if ((eventName == 'ngSubmit')) {
      const pd_sub_0:any = ((<any>this.context.onSubmit()) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  handleEvent_10(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._DefaultValueAccessor_10_3.handleEvent(eventName,$event) && result);
    if ((eventName == 'focus')) {
      const pd_sub_0:any = ((<any>this.context.focusFunction($event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  handleEvent_15(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._DefaultValueAccessor_15_3.handleEvent(eventName,$event) && result);
    if ((eventName == 'ngModelChange')) {
      const pd_sub_0:any = ((<any>(this.context.datePickerDate = $event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  handleEvent_17(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'dateChange')) {
      const pd_sub_0:any = ((<any>(this.context.datePickerDate = $event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  handleEvent_26(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._DefaultValueAccessor_26_3.handleEvent(eventName,$event) && result);
    result = (this._Autosize_26_8.handleEvent(eventName,$event) && result);
    return result;
  }
  handleEvent_31(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'imageData')) {
      const pd_sub_0:any = ((<any>this.context.imageUploaded($event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}