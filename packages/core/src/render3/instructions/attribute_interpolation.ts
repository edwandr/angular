/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import {SanitizerFn} from '../interfaces/sanitization';
import {getLView, getSelectedIndex} from '../state';
import {NO_CHANGE} from '../tokens';

import {ɵɵinterpolation1, ɵɵinterpolation2, ɵɵinterpolation3, ɵɵinterpolation4, ɵɵinterpolation5, ɵɵinterpolation6, ɵɵinterpolation7, ɵɵinterpolation8, ɵɵinterpolationV} from './interpolation';
import {TsickleIssue1009, elementAttributeInternal} from './shared';



/**
 *
 * Update an interpolated attribute on an element with single bound value surrounded by text.
 *
 * Used when the value passed to a property has 1 interpolated value in it:
 *
 * ```html
 * <div attr.title="prefix{{v0}}suffix"></div>
 * ```
 *
 * Its compiled representation is::
 *
 * ```ts
 * ɵɵattributeInterpolate1('title', 'prefix', v0, 'suffix');
 * ```
 *
 * @param attrName The name of the attribute to update
 * @param prefix Static value used for concatenation only.
 * @param v0 Value checked for change.
 * @param suffix Static value used for concatenation only.
 * @param sanitizer An optional sanitizer function
 * @returns itself, so that it may be chained.
 * @codeGenApi
 */
export function ɵɵattributeInterpolate1(
    attrName: string, prefix: string, v0: any, suffix: string, sanitizer?: SanitizerFn,
    namespace?: string): TsickleIssue1009 {
  const index = getSelectedIndex();
  const lView = getLView();

  // TODO(FW-1340): Refactor to remove the use of other instructions here.
  const interpolatedValue = ɵɵinterpolation1(prefix, v0, suffix);
  if (interpolatedValue !== NO_CHANGE) {
    elementAttributeInternal(index, attrName, interpolatedValue, lView, sanitizer, namespace);
  }
  return ɵɵattributeInterpolate1;
}

/**
 *
 * Update an interpolated attribute on an element with 2 bound values surrounded by text.
 *
 * Used when the value passed to a property has 2 interpolated values in it:
 *
 * ```html
 * <div attr.title="prefix{{v0}}-{{v1}}suffix"></div>
 * ```
 *
 * Its compiled representation is::
 *
 * ```ts
 * ɵɵattributeInterpolate2('title', 'prefix', v0, '-', v1, 'suffix');
 * ```
 *
 * @param attrName The name of the attribute to update
 * @param prefix Static value used for concatenation only.
 * @param v0 Value checked for change.
 * @param i0 Static value used for concatenation only.
 * @param v1 Value checked for change.
 * @param suffix Static value used for concatenation only.
 * @param sanitizer An optional sanitizer function
 * @returns itself, so that it may be chained.
 * @codeGenApi
 */
export function ɵɵattributeInterpolate2(
    attrName: string, prefix: string, v0: any, i0: string, v1: any, suffix: string,
    sanitizer?: SanitizerFn, namespace?: string): TsickleIssue1009 {
  const index = getSelectedIndex();
  const lView = getLView();

  // TODO(FW-1340): Refactor to remove the use of other instructions here.
  const interpolatedValue = ɵɵinterpolation2(prefix, v0, i0, v1, suffix);
  if (interpolatedValue !== NO_CHANGE) {
    elementAttributeInternal(index, attrName, interpolatedValue, lView, sanitizer, namespace);
  }
  return ɵɵattributeInterpolate2;
}

/**
 *
 * Update an interpolated attribute on an element with 3 bound values surrounded by text.
 *
 * Used when the value passed to a property has 3 interpolated values in it:
 *
 * ```html
 * <div attr.title="prefix{{v0}}-{{v1}}-{{v2}}suffix"></div>
 * ```
 *
 * Its compiled representation is::
 *
 * ```ts
 * ɵɵattributeInterpolate3(
 * 'title', 'prefix', v0, '-', v1, '-', v2, 'suffix');
 * ```
 *
 * @param attrName The name of the attribute to update
 * @param prefix Static value used for concatenation only.
 * @param v0 Value checked for change.
 * @param i0 Static value used for concatenation only.
 * @param v1 Value checked for change.
 * @param i1 Static value used for concatenation only.
 * @param v2 Value checked for change.
 * @param suffix Static value used for concatenation only.
 * @param sanitizer An optional sanitizer function
 * @returns itself, so that it may be chained.
 * @codeGenApi
 */
export function ɵɵattributeInterpolate3(
    attrName: string, prefix: string, v0: any, i0: string, v1: any, i1: string, v2: any,
    suffix: string, sanitizer?: SanitizerFn, namespace?: string): TsickleIssue1009 {
  const index = getSelectedIndex();
  const lView = getLView();

  // TODO(FW-1340): Refactor to remove the use of other instructions here.
  const interpolatedValue = ɵɵinterpolation3(prefix, v0, i0, v1, i1, v2, suffix);
  if (interpolatedValue !== NO_CHANGE) {
    elementAttributeInternal(index, attrName, interpolatedValue, lView, sanitizer, namespace);
  }
  return ɵɵattributeInterpolate3;
}

/**
 *
 * Update an interpolated attribute on an element with 4 bound values surrounded by text.
 *
 * Used when the value passed to a property has 4 interpolated values in it:
 *
 * ```html
 * <div attr.title="prefix{{v0}}-{{v1}}-{{v2}}-{{v3}}suffix"></div>
 * ```
 *
 * Its compiled representation is::
 *
 * ```ts
 * ɵɵattributeInterpolate4(
 * 'title', 'prefix', v0, '-', v1, '-', v2, '-', v3, 'suffix');
 * ```
 *
 * @param attrName The name of the attribute to update
 * @param prefix Static value used for concatenation only.
 * @param v0 Value checked for change.
 * @param i0 Static value used for concatenation only.
 * @param v1 Value checked for change.
 * @param i1 Static value used for concatenation only.
 * @param v2 Value checked for change.
 * @param i2 Static value used for concatenation only.
 * @param v3 Value checked for change.
 * @param suffix Static value used for concatenation only.
 * @param sanitizer An optional sanitizer function
 * @returns itself, so that it may be chained.
 * @codeGenApi
 */
export function ɵɵattributeInterpolate4(
    attrName: string, prefix: string, v0: any, i0: string, v1: any, i1: string, v2: any, i2: string,
    v3: any, suffix: string, sanitizer?: SanitizerFn, namespace?: string): TsickleIssue1009 {
  const index = getSelectedIndex();
  const lView = getLView();

  // TODO(FW-1340): Refactor to remove the use of other instructions here.
  const interpolatedValue = ɵɵinterpolation4(prefix, v0, i0, v1, i1, v2, i2, v3, suffix);
  if (interpolatedValue !== NO_CHANGE) {
    elementAttributeInternal(index, attrName, interpolatedValue, lView, sanitizer, namespace);
  }
  return ɵɵattributeInterpolate4;
}

/**
 *
 * Update an interpolated attribute on an element with 5 bound values surrounded by text.
 *
 * Used when the value passed to a property has 5 interpolated values in it:
 *
 * ```html
 * <div attr.title="prefix{{v0}}-{{v1}}-{{v2}}-{{v3}}-{{v4}}suffix"></div>
 * ```
 *
 * Its compiled representation is::
 *
 * ```ts
 * ɵɵattributeInterpolate5(
 * 'title', 'prefix', v0, '-', v1, '-', v2, '-', v3, '-', v4, 'suffix');
 * ```
 *
 * @param attrName The name of the attribute to update
 * @param prefix Static value used for concatenation only.
 * @param v0 Value checked for change.
 * @param i0 Static value used for concatenation only.
 * @param v1 Value checked for change.
 * @param i1 Static value used for concatenation only.
 * @param v2 Value checked for change.
 * @param i2 Static value used for concatenation only.
 * @param v3 Value checked for change.
 * @param i3 Static value used for concatenation only.
 * @param v4 Value checked for change.
 * @param suffix Static value used for concatenation only.
 * @param sanitizer An optional sanitizer function
 * @returns itself, so that it may be chained.
 * @codeGenApi
 */
export function ɵɵattributeInterpolate5(
    attrName: string, prefix: string, v0: any, i0: string, v1: any, i1: string, v2: any, i2: string,
    v3: any, i3: string, v4: any, suffix: string, sanitizer?: SanitizerFn,
    namespace?: string): TsickleIssue1009 {
  const index = getSelectedIndex();
  const lView = getLView();

  // TODO(FW-1340): Refactor to remove the use of other instructions here.
  const interpolatedValue = ɵɵinterpolation5(prefix, v0, i0, v1, i1, v2, i2, v3, i3, v4, suffix);
  if (interpolatedValue !== NO_CHANGE) {
    elementAttributeInternal(index, attrName, interpolatedValue, lView, sanitizer, namespace);
  }
  return ɵɵattributeInterpolate5;
}

/**
 *
 * Update an interpolated attribute on an element with 6 bound values surrounded by text.
 *
 * Used when the value passed to a property has 6 interpolated values in it:
 *
 * ```html
 * <div attr.title="prefix{{v0}}-{{v1}}-{{v2}}-{{v3}}-{{v4}}-{{v5}}suffix"></div>
 * ```
 *
 * Its compiled representation is::
 *
 * ```ts
 * ɵɵattributeInterpolate6(
 *    'title', 'prefix', v0, '-', v1, '-', v2, '-', v3, '-', v4, '-', v5, 'suffix');
 * ```
 *
 * @param attrName The name of the attribute to update
 * @param prefix Static value used for concatenation only.
 * @param v0 Value checked for change.
 * @param i0 Static value used for concatenation only.
 * @param v1 Value checked for change.
 * @param i1 Static value used for concatenation only.
 * @param v2 Value checked for change.
 * @param i2 Static value used for concatenation only.
 * @param v3 Value checked for change.
 * @param i3 Static value used for concatenation only.
 * @param v4 Value checked for change.
 * @param i4 Static value used for concatenation only.
 * @param v5 Value checked for change.
 * @param suffix Static value used for concatenation only.
 * @param sanitizer An optional sanitizer function
 * @returns itself, so that it may be chained.
 * @codeGenApi
 */
export function ɵɵattributeInterpolate6(
    attrName: string, prefix: string, v0: any, i0: string, v1: any, i1: string, v2: any, i2: string,
    v3: any, i3: string, v4: any, i4: string, v5: any, suffix: string, sanitizer?: SanitizerFn,
    namespace?: string): TsickleIssue1009 {
  const index = getSelectedIndex();
  const lView = getLView();
  // TODO(FW-1340): Refactor to remove the use of other instructions here.
  const interpolatedValue =
      ɵɵinterpolation6(prefix, v0, i0, v1, i1, v2, i2, v3, i3, v4, i4, v5, suffix);
  if (interpolatedValue !== NO_CHANGE) {
    elementAttributeInternal(index, attrName, interpolatedValue, lView, sanitizer, namespace);
  }
  return ɵɵattributeInterpolate6;
}

/**
 *
 * Update an interpolated attribute on an element with 7 bound values surrounded by text.
 *
 * Used when the value passed to a property has 7 interpolated values in it:
 *
 * ```html
 * <div attr.title="prefix{{v0}}-{{v1}}-{{v2}}-{{v3}}-{{v4}}-{{v5}}-{{v6}}suffix"></div>
 * ```
 *
 * Its compiled representation is::
 *
 * ```ts
 * ɵɵattributeInterpolate7(
 *    'title', 'prefix', v0, '-', v1, '-', v2, '-', v3, '-', v4, '-', v5, '-', v6, 'suffix');
 * ```
 *
 * @param attrName The name of the attribute to update
 * @param prefix Static value used for concatenation only.
 * @param v0 Value checked for change.
 * @param i0 Static value used for concatenation only.
 * @param v1 Value checked for change.
 * @param i1 Static value used for concatenation only.
 * @param v2 Value checked for change.
 * @param i2 Static value used for concatenation only.
 * @param v3 Value checked for change.
 * @param i3 Static value used for concatenation only.
 * @param v4 Value checked for change.
 * @param i4 Static value used for concatenation only.
 * @param v5 Value checked for change.
 * @param i5 Static value used for concatenation only.
 * @param v6 Value checked for change.
 * @param suffix Static value used for concatenation only.
 * @param sanitizer An optional sanitizer function
 * @returns itself, so that it may be chained.
 * @codeGenApi
 */
export function ɵɵattributeInterpolate7(
    attrName: string, prefix: string, v0: any, i0: string, v1: any, i1: string, v2: any, i2: string,
    v3: any, i3: string, v4: any, i4: string, v5: any, i5: string, v6: any, suffix: string,
    sanitizer?: SanitizerFn, namespace?: string): TsickleIssue1009 {
  const index = getSelectedIndex();
  const lView = getLView();
  // TODO(FW-1340): Refactor to remove the use of other instructions here.
  const interpolatedValue =
      ɵɵinterpolation7(prefix, v0, i0, v1, i1, v2, i2, v3, i3, v4, i4, v5, i5, v6, suffix);
  if (interpolatedValue !== NO_CHANGE) {
    elementAttributeInternal(index, attrName, interpolatedValue, lView, sanitizer, namespace);
  }
  return ɵɵattributeInterpolate7;
}

/**
 *
 * Update an interpolated attribute on an element with 8 bound values surrounded by text.
 *
 * Used when the value passed to a property has 8 interpolated values in it:
 *
 * ```html
 * <div attr.title="prefix{{v0}}-{{v1}}-{{v2}}-{{v3}}-{{v4}}-{{v5}}-{{v6}}-{{v7}}suffix"></div>
 * ```
 *
 * Its compiled representation is::
 *
 * ```ts
 * ɵɵattributeInterpolate8(
 *  'title', 'prefix', v0, '-', v1, '-', v2, '-', v3, '-', v4, '-', v5, '-', v6, '-', v7, 'suffix');
 * ```
 *
 * @param attrName The name of the attribute to update
 * @param prefix Static value used for concatenation only.
 * @param v0 Value checked for change.
 * @param i0 Static value used for concatenation only.
 * @param v1 Value checked for change.
 * @param i1 Static value used for concatenation only.
 * @param v2 Value checked for change.
 * @param i2 Static value used for concatenation only.
 * @param v3 Value checked for change.
 * @param i3 Static value used for concatenation only.
 * @param v4 Value checked for change.
 * @param i4 Static value used for concatenation only.
 * @param v5 Value checked for change.
 * @param i5 Static value used for concatenation only.
 * @param v6 Value checked for change.
 * @param i6 Static value used for concatenation only.
 * @param v7 Value checked for change.
 * @param suffix Static value used for concatenation only.
 * @param sanitizer An optional sanitizer function
 * @returns itself, so that it may be chained.
 * @codeGenApi
 */
export function ɵɵattributeInterpolate8(
    attrName: string, prefix: string, v0: any, i0: string, v1: any, i1: string, v2: any, i2: string,
    v3: any, i3: string, v4: any, i4: string, v5: any, i5: string, v6: any, i6: string, v7: any,
    suffix: string, sanitizer?: SanitizerFn, namespace?: string): TsickleIssue1009 {
  const index = getSelectedIndex();
  const lView = getLView();
  // TODO(FW-1340): Refactor to remove the use of other instructions here.
  const interpolatedValue =
      ɵɵinterpolation8(prefix, v0, i0, v1, i1, v2, i2, v3, i3, v4, i4, v5, i5, v6, i6, v7, suffix);
  if (interpolatedValue !== NO_CHANGE) {
    elementAttributeInternal(index, attrName, interpolatedValue, lView, sanitizer, namespace);
  }
  return ɵɵattributeInterpolate8;
}

/**
 * Update an interpolated attribute on an element with 8 or more bound values surrounded by text.
 *
 * Used when the number of interpolated values exceeds 7.
 *
 * ```html
 * <div
 *  title="prefix{{v0}}-{{v1}}-{{v2}}-{{v3}}-{{v4}}-{{v5}}-{{v6}}-{{v7}}-{{v8}}-{{v9}}suffix"></div>
 * ```
 *
 * Its compiled representation is::
 *
 * ```ts
 * ɵɵattributeInterpolateV(
 *  'title', ['prefix', v0, '-', v1, '-', v2, '-', v3, '-', v4, '-', v5, '-', v6, '-', v7, '-', v9,
 *  'suffix']);
 * ```
 *
 * @param attrName The name of the attribute to update.
 * @param values The a collection of values and the strings in-between those values, beginning with
 * a string prefix and ending with a string suffix.
 * (e.g. `['prefix', value0, '-', value1, '-', value2, ..., value99, 'suffix']`)
 * @param sanitizer An optional sanitizer function
 * @returns itself, so that it may be chained.
 * @codeGenApi
 */
export function ɵɵattributeInterpolateV(
    attrName: string, values: any[], sanitizer?: SanitizerFn,
    namespace?: string): TsickleIssue1009 {
  const index = getSelectedIndex();
  const lView = getLView();
  // TODO(FW-1340): Refactor to remove the use of other instructions here.
  const interpolated = ɵɵinterpolationV(values);
  if (interpolated !== NO_CHANGE) {
    elementAttributeInternal(index, attrName, interpolated, lView, sanitizer, namespace);
  }
  return ɵɵattributeInterpolateV;
}
